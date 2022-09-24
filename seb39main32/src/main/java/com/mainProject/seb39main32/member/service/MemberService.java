package com.mainProject.seb39main32.member.service;

import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.member.entity.Member;
import com.mainProject.seb39main32.member.repository.MemberRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public MemberService(MemberRepository memberRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.memberRepository = memberRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    /**
     * 회원생성
     * @param member
     * @return
     */
    public Member createMember(Member member){
        verifyExistsEmail(member.getEmail());
        member.setMemberPw(bCryptPasswordEncoder.encode(member.getMemberPw()));
        member.setMemberCreateAt(String.valueOf(LocalDateTime.now()));
        member.setMemberUpdateAt(String.valueOf(LocalDateTime.now()));
        member.setAuth("ROLE_USER");
        return memberRepository.save(member);
    }


    /**
     * 회원 검색
     * @param memberId
     * @return
     */
    public Member findMember(long memberId){
        return findverifiedMember(memberId);
    }


    /**
     * 회원 삭제
     * @param memberId
     */
    public void deleteMember(long memberId){
        Member findMember = findverifiedMember(memberId);
        //usersRepository.delete(findUser);
        findMember.setAuth("ROLE_OUT");
        memberRepository.save(findMember);
    }

    public Member updateMember(Member member){
        member.setMemberPw(bCryptPasswordEncoder.encode(member.getMemberPw()));
        Member findMember = findverifiedMember(member.getMemberId());
        Optional.ofNullable(member.getMemberPw())
                .ifPresent(pw -> findMember.setMemberPw(pw));
        findMember.setMemberUpdateAt(String.valueOf(LocalDateTime.now()));
        return memberRepository.save(findMember);
    }


    /**
     * 예외 처리
     * @param memberId
     * @return
     */
    public Member findverifiedMember(long memberId){
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);

        Member findMember =
                optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findMember;
    }

    /**
     * 테이블 내 중복된 이메일이 있는지 검사
     * @param email
     */
    private void verifyExistsEmail(String email){
        Optional<Member> member= memberRepository.findByEmail(email);
        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
}