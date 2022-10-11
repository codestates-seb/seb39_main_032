package com.mainProject.seb39main32.config.oauth;

import com.mainProject.seb39main32.member.entity.Member;
import com.mainProject.seb39main32.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PrincipalDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<Member> memberEntity = memberRepository.findByEmail(email);
        if(memberEntity.isPresent()) {
            return new PrincipalDetails(memberEntity);
        }
        return null;
        //return new PrincipalDetails(userEntity.get());
    }
}