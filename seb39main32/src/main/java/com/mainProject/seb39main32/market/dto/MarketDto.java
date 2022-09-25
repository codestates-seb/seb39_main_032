package com.mainProject.seb39main32.market.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class MarketDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post{
        private long marketId;
        private long memberId;
        private String marketName;
        private String companyNumber;
        private String address;
        private String phone;
        private String createAt;
        private String updateAt;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long marketId;
        private long memberId;
        private String marketName;
        private String companyNumber;
        private String address;
        private String phone;
        private String createAt;
        private String updateAt;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long marketId;
        private long memberId;
        private String marketName;
        private String companyNumber;
        private String address;
        private String phone;
        private String createAt;
        private String updateAt;
    }
}
