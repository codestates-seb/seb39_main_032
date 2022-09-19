package com.mainProject.seb39main32.wish.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class WishDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private long boardId;
        private long memberId;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long wishId;
        private long boardId;
        private long memberId;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long wishId;
        private long boardId;
        private long memberId;
    }
}
