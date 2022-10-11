package com.mainProject.seb39main32.member.controller;

import com.mainProject.seb39main32.config.oauth.PrincipalDetails;
import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.member.dto.MemberDto;
import com.mainProject.seb39main32.member.entity.Member;
import com.mainProject.seb39main32.member.mapper.MemberMapper;
import com.mainProject.seb39main32.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping
@Validated
@Slf4j
public class AuthController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public AuthController(MemberService memberService, MemberMapper mapper, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.memberService = memberService;
        this.mapper = mapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }
    /**
     * POST - 회원가입
     * @param requestBody
     * @return
     */
    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody){
        Member member = mapper.memberPostToMember(requestBody);
        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = mapper.memberToMemberResponse(createdMember);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }
    @DeleteMapping("/withdrawal")
    public ResponseEntity deleteMember(
            @AuthenticationPrincipal PrincipalDetails principalDetails) {
        memberService.deleteMember(principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
