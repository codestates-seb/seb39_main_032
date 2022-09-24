package com.mainProject.seb39main32.member.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


public class MemberDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private String email;
        private String memberPw;
        private String memberCreateAt;
        private String memberUpdateAt;
        private String auth;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long memberId;
        private String email;
        private String memberPw;
        private String memberCreateAt;
        private String memberUpdateAt;
        private String auth;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long memberId;
        private String email;
        private String memberPw;
        private String memberCreateAt;
        private String memberUpdateAt;
        private String auth;
    }
}
