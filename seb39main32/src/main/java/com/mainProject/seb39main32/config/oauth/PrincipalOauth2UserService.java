package com.mainProject.seb39main32.config.oauth;

import com.mainProject.seb39main32.member.repository.MemberRepository;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
public class PrincipalOauth2UserService implements OAuth2UserService {

    @Autowired
    private MemberRepository memberRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> oAuth2UserService = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = oAuth2UserService.loadUser(userRequest);


        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        String userNameAttributeName = userRequest.getClientRegistration()
                .getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();

        OAuth2Attribute oAuth2Attribute =
                OAuth2Attribute.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());

//        log.info("{}", oAuth2Attribute);

        var memberAttribute = oAuth2Attribute.convertToMap();

        return new DefaultOAuth2User(
                Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")),
                memberAttribute, "email");
    }


}


@ToString
@Builder(access = AccessLevel.PRIVATE)
@Getter
class OAuth2Attribute {
    private Map<String, Object> attributes;
    private String attributeKey;
    private String email;
    private String name;
    //private String picture;

    static OAuth2Attribute of(String provider, String attributeKey,
                              Map<String, Object> attributes) {
        switch (provider) {
            case "google":
                return ofGoogle(attributeKey, attributes);
//            case "kakao":
//                return ofKakao("email", attributes);
//            case "naver":
//                return ofNaver("id", attributes);
            default:
                throw new RuntimeException();
        }
    }

    private static OAuth2Attribute ofGoogle(String attributeKey,
                                            Map<String, Object> attributes) {
        return OAuth2Attribute.builder()
                .name((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                //.picture((String)attributes.get("picture"))
                .attributes(attributes)
                .attributeKey(attributeKey)
                .build();
    }

//    private static OAuth2Attribute ofKakao(String attributeKey,
//                                           Map<String, Object> attributes) {
//        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
//        Map<String, Object> kakaoProfile = (Map<String, Object>) kakaoAccount.get("profile");
//
//        return OAuth2Attribute.builder()
//                .name((String) kakaoProfile.get("nickname"))
//                .email((String) kakaoAccount.get("email"))
//                .picture((String)kakaoProfile.get("profile_image_url"))
//                .attributes(kakaoAccount)
//                .attributeKey(attributeKey)
//                .build();
//    }
//
//    private static OAuth2Attribute ofNaver(String attributeKey,
//                                           Map<String, Object> attributes) {
//        Map<String, Object> response = (Map<String, Object>) attributes.get("response");
//
//        return OAuth2Attribute.builder()
//                .name((String) response.get("name"))
//                .email((String) response.get("email"))
//                .picture((String) response.get("profile_image"))
//                .attributes(response)
//                .attributeKey(attributeKey)
//                .build();
//    }

    Map<String, Object> convertToMap() {
        Map<String, Object> map = new HashMap<>();
        map.put("id", attributeKey);
        map.put("key", attributeKey);
        map.put("name", name);
        map.put("email", email);
        //map.put("picture", picture);

        return map;
    }
}