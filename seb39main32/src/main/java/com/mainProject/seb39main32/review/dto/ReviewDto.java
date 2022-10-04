package com.mainProject.seb39main32.review.dto;

import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.member.entity.Member;
import lombok.*;

public class ReviewDto {


    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    @Setter
    public static class Post{
        private long reviewId;
        private long memberId;
        private long marketId;
        private String reviewContent;
        private String reviewCreateAt;
        private String reviewUpdateAt;

        public Member getMember(){
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }

        public Market getMarket(){
            Market market = new Market();
            market.setMarketId(marketId);
            return market;
        }

    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Patch{
        private long reviewId;
        @Setter(AccessLevel.NONE)
        private long memberId;
        @Setter(AccessLevel.NONE)
        private long marketId;
        private String reviewContent;
        private String reviewCreateAt;
        private String reviewUpdateAt;

        public void setMember(Member member) {this.memberId = member.getMemberId();}
        public void setMarket(Market market) {this.marketId = market.getMarketId();}

    }
    @Builder
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Response{
        private long reviewId;
        @Setter(AccessLevel.NONE)
        private long memberId;
        @Setter(AccessLevel.NONE)
        private long marketId;
        private String reviewContent;
        private String reviewCreateAt;
        private String reviewUpdateAt;
        private String memberEmail;

        public void setMember(Member member) {
            this.memberId = member.getMemberId();
            this.memberEmail = member.getEmail();
        }

        public void setMarket(Market market) {this.marketId = market.getMarketId();}
    }


}
