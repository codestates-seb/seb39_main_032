package com.mainProject.seb39main32.board.dto;


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
        private String itemTime;
        private String boardCreateAt;
        private String boardUpdateAt;
        private String boardStatus;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long boardId;
        private long memberId;
        private long marketId;
        private String itemName;
        private long itemPrice;
        private String foodCategory;
        private long itemAmount;
        private long itemSale;
        private String itemTime;
        private String boardCreateAt;
        private String boardUpdateAt;
        private String boardStatus;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long boardId;
        private long memberId;
        private long marketId;
        private String itemName;
        private long itemPrice;
        private String foodCategory;
        private long itemAmount;
        private long itemSale;
        private String itemTime;
        private String boardCreateAt;
        private String boardUpdateAt;
        private String boardStatus;
    }
}
