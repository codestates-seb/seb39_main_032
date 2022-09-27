package com.mainProject.seb39main32.member.controller;

import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.member.dto.MemberDto;
import com.mainProject.seb39main32.member.entity.Member;
import com.mainProject.seb39main32.member.mapper.MemberMapper;
import com.mainProject.seb39main32.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import javax.validation.constraints.Positive;


@RestController
@RequestMapping("/api/member")
@Validated
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public MemberController(MemberService memberService, MemberMapper mapper, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.memberService = memberService;
        this.mapper = mapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }




    @GetMapping("/duplicate")
    public ResponseEntity getExistEmail(@RequestParam("email") String email){
        System.out.println(email);
        Member member = memberService.findEmail(email);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


    /**
     * GET - 로그인
     * @param memberId
     * @return
     */
    @GetMapping("/login/basic/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member))
                , HttpStatus.OK);
    }


    @PatchMapping("/login/basic/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.Patch requestBody) {
        requestBody.setMemberId(memberId);
        Member member =
                memberService.updateMember(mapper.memberPatchToMember(requestBody));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
                HttpStatus.OK);
    }


//    /**
//     * 회원 탈퇴
//     * @param userId
//     * @return
//     */
//    @DeleteMapping("/login/basic/{member-id}")
//    public ResponseEntity deleteMember(
//            @PathVariable("member-id") @Positive long memberId) {
//        memberService.deleteMember(memberId);
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }


    /**
     * 회원 탈퇴
     * @param memberId
     * @return
     */
    @DeleteMapping("/login/basic/{member-id}")
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive long memberId) {
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
