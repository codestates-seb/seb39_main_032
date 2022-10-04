package com.mainProject.seb39main32.board.dto;


import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.member.entity.Member;
import com.mainProject.seb39main32.wish.dto.WishDto;
import com.mainProject.seb39main32.wish.entity.Wish;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.util.List;

@Data
public class BoardDto {
    @Getter
    @AllArgsConstructor

    public static class Post{
        @ApiModelProperty(example = "1")
        private long memberId;
        @ApiModelProperty(example = "9")
        private long marketId;
        @ApiModelProperty(example = "떡볶이")
        private String itemName;
        @ApiModelProperty(example = "4000")
        private long itemPrice;
        @ApiModelProperty(example = "분식")
        private String foodCategory;
        @ApiModelProperty(example = "5")
        private long itemAmount;
        @ApiModelProperty(example = "3000")
        private long itemSale;
        @ApiModelProperty(example = "2022-09-29 20:00:00")
        private String saleStartTime;
        @ApiModelProperty(example = "2022-09-29 22:00:00")
        private String saleEndTime;
        @ApiModelProperty(example = "2022-09-29 20:00:00")
        private String boardCreateAt;
        @ApiModelProperty(example = "2022-09-29 20:00:00")
        private String boardUpdateAt;
        @ApiModelProperty(example = "판매중")
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
    @Builder
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
    @Builder
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
        private long wishListCount;

        public void setMember(Member member) {this.memberId = member.getMemberId();}
        public void setMarket(Market market) {
            this.marketId = market.getMarketId();
            this.marketName = market.getMarketName();
        }

        public void setWishListCount(List<WishDto.Response> wishList){this.wishListCount = wishList.size();}

    }


    @Getter
    @Builder
    @AllArgsConstructor
    public static class ResponseOnlyBoard{
        private long boardId;
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

    }

}
