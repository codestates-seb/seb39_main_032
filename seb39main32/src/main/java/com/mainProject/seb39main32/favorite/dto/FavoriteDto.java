package com.mainProject.seb39main32.favorite.dto;

import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.member.entity.Member;
import lombok.*;

import java.util.List;

public class FavoriteDto {

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Post{
        @Setter(AccessLevel.NONE)
        private long memberId;
        @Setter(AccessLevel.NONE)
        private long marketId;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }

        public Market getMarket() {
            Market market = new Market();
            market.setMarketId(marketId);
            return market;
        }
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Patch{
        private long favoriteId;
        @Setter(AccessLevel.NONE)
        private long memberId;
        @Setter(AccessLevel.NONE)
        private long marketId;
        public void setMember(Member member) {this.memberId = member.getMemberId();}
        public void setMarket(Market market) {this.marketId = market.getMarketId();}

    }
    @Builder
    @AllArgsConstructor
    @Getter
    @Setter
    public static class Response{
        private long favoriteId;
        @Setter(AccessLevel.NONE)
        private long memberId;
        @Setter(AccessLevel.NONE)
        private long marketId;

        public void setMember(Member member) {this.memberId = member.getMemberId();}
        public void setMarket(Market market) {this.marketId = market.getMarketId();}
        /*private List<FavoriteDto.Response> favoriteList;

        public Member getMember() {
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }

        public Market getMarket() {
            Market market = new Market();
            market.setMarketId(marketId);
            return market;
        }*/
    }


}
