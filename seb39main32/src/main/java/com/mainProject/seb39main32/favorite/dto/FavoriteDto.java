package com.mainProject.seb39main32.favorite.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class FavoriteDto {

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Post{
        private long favoriteId;
        private long memberId;
        private long marketId;
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Patch{
        private long favoriteId;
        private long memberId;
        private long marketId;
    }

    @AllArgsConstructor
    @Getter
    public static class Response{
        private long favoriteId;
        private long memberId;
        private long marketId;
    }


}
