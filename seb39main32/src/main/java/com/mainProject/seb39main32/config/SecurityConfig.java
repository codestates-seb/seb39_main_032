package com.mainProject.seb39main32.config;


import com.mainProject.seb39main32.config.filter.JwtAuthenticationFilter;
import com.mainProject.seb39main32.config.filter.JwtAuthorizationFilter;
import com.mainProject.seb39main32.config.oauth.PrincipalOauth2UserService;
import com.mainProject.seb39main32.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

@Configuration
@EnableWebSecurity(debug = true)
@RequiredArgsConstructor
//@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)

public class SecurityConfig {

    private final CorsFilter corsFilter;
    private final MemberRepository memberRepository;
    @Autowired
    private PrincipalOauth2UserService principalOauth2UserService;


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        //http.addFilterBefore(new FirstFilter(), SecurityContextHolderFilter.class); // 주석 처리 or 제거
        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
            .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomDsl()) // 추가
                .and()
            .authorizeRequests()
                .antMatchers("/api/user/**")
                .access("hasRole('ROLE_USER') or hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
                .antMatchers("/apiManager/**")
                .access("hasRole('ROLE_MANAGER') or hasRole('ROLE_ADMIN')")
                .antMatchers("/apiAdmin/**")
                .access("hasRole('ROLE_ADMIN')")
                .anyRequest().permitAll();
        http
            .oauth2Login()
                .authorizationEndpoint()
                .baseUri("/login/oauth2/code")
            .and()
                .redirectionEndpoint()
                .baseUri("/login/oauth2/code/google")
                .and()
                .userInfoEndpoint()
                .userService(principalOauth2UserService);

        return http.build();


//        http.addFilterAfter(new MyStackOverFlowFilter(), LogoutFilter.class);
//        http.authorizeRequests()
//                .antMatchers("/user/**").authenticated()
//                .antMatchers("/manager/**").access("hasRole('ADMIN_AUTHORITY') or hasRole('MANAGER_AUTHORITY')")
//                .antMatchers("/admin/**").access("hasRole('ADMIN_AUTHORITY')")
//                .anyRequest().permitAll()
//                .and()
//                .formLogin()
//                .loginPage("/login").usernameParameter("email")
//                .loginProcessingUrl("/login") // login url이 호출되면 시큐리티가 대신 로그인을 진행한다.
//                .defaultSuccessUrl("/");
//        return http.build();
    }
    public class CustomDsl extends AbstractHttpConfigurer<CustomDsl, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);
            builder
                    .addFilter(corsFilter)
                    .addFilter(new JwtAuthenticationFilter(authenticationManager))
                    .addFilter(new JwtAuthorizationFilter(authenticationManager,memberRepository));
        }
    }
}
