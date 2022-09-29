package com.mainProject.seb39main32.board.dto;


import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.member.entity.Member;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;


public class BoardDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private long memberId;
        private long marketId;
        private String itemName;
        private long itemPrice;
        private String foodCategory;
        private long itemAmount;
        private long itemSale;
        private String saleStartTime;
        private String saleEndTime;
        private String boardCreateAt;
        private String boardUpdateAt;
        private String boardStatus;

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

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long boardId;
        @Setter(AccessLevel.NONE)
        private long memberId;
        @Setter(AccessLevel.NONE)
        private long marketId;

        private String itemName;
        private long itemPrice;
        private String foodCategory;
        private long itemAmount;
        private long itemSale;
        private String saleStartTime;
        private String saleEndTime;
        private String boardCreateAt;
        private String boardUpdateAt;
        private String boardStatus;

        public void setMember(Member member) {this.memberId = member.getMemberId();}
        public void setMarket(Market market) {this.marketId = market.getMarketId();}
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long boardId;
        @Setter(AccessLevel.NONE)
        private long memberId;

        @Setter(AccessLevel.NONE)
        private long marketId;
        private String itemName;
        private long itemPrice;
        private String foodCategory;
        private long itemAmount;
        private long itemSale;
        private String saleStartTime;
        private String saleEndTime;
        private String boardCreateAt;
        private String boardUpdateAt;
        private String boardStatus;

        public void setMember(Member member) {this.memberId = member.getMemberId();}
        public void setMarket(Market market) {this.marketId = market.getMarketId();}
    }

    @Getter
    @AllArgsConstructor
    public static class ResponseMarketName{
        private long boardId;
        @Setter(AccessLevel.NONE)
        private long memberId;

        @Setter(AccessLevel.NONE)
        private long marketId;
        @Setter(AccessLevel.NONE)
        private String marketName;
        private String itemName;
        private long itemPrice;
        private String foodCategory;
        private long itemAmount;
        private long itemSale;
        private String saleStartTime;
        private String saleEndTime;
        private String boardCreateAt;
        private String boardUpdateAt;
        private String boardStatus;

        public void setMember(Member member) {this.memberId = member.getMemberId();}
        public void setMarket(Market market) {
            this.marketId = market.getMarketId();
            this.marketName = market.getMarketName();
        }

    }

}
