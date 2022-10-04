package com.mainProject.seb39main32.market.dto;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.member.entity.Member;
import com.mainProject.seb39main32.review.dto.ReviewDto;
import com.mainProject.seb39main32.wish.dto.WishDto;
import lombok.*;

import java.util.List;

public class MarketDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post{
        private long memberId;
        private String marketName;
        private String companyNumber;
        private String address;
        private String phone;
        private String createAt;
        private String updateAt;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }
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
        @Setter(AccessLevel.NONE)
        private long memberId;
        private String marketName;
        private String companyNumber;
        private String address;
        private String phone;
        private String createAt;
        private String updateAt;

        public void setMember(Member member){
            this.memberId = member.getMemberId();
        }
    }

    @Getter
    @Builder
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class ResponseListDto{
        private long marketId;
        @Setter(AccessLevel.NONE)
        private long memberId;
        private String marketName;
        private String companyNumber;
        private String address;
        private String phone;
        private String createAt;
        private String updateAt;
        private List<BoardDto.ResponseMarketName> boardList;
        private List<ReviewDto.Response> reviewList;
        private long favoriteCount;


        public void setMember(Member member){
            this.memberId = member.getMemberId();
        }
        //public void setFavoriteCount(List<FavoriteDto.Response> favoriteList){this.favoriteCount = favoriteList.size();}

    }
}