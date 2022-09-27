package com.mainProject.seb39main32.config.oauth;

import com.mainProject.seb39main32.member.entity.Member;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Map;
import java.util.Optional;

@Data
public class PrincipalDetails implements UserDetails, OAuth2User {

    private Member member;

    private Map<String, Object> attributes;
    public PrincipalDetails(Optional<Member> member) {
        this.member = member.get();
    }

    public PrincipalDetails(Member member, Map<String, Object> attributes) {
        this.member = member;
        this.attributes = attributes;
    }
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();
        member.getAuthList().forEach(n -> {
            authorities.add(() -> n);
        });
        return authorities;
    }

    @Override
    public String getPassword() {
        return member.getMemberPw();
    }

    @Override
    public String getUsername() {
        return member.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    @Override
    public String getName() {
        return null;
    }
}
