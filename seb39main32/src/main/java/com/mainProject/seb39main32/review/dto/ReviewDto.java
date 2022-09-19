package com.mainProject.seb39main32.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class ReviewDto {


    @AllArgsConstructor
    @Getter
    @Setter
    public static class Post{
        private long reviewId;
        private long memberId;
        private long marketId;
        private String reviewContent;
        private String reviewCreateAt;
        private String reviewUpdateAt;

    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class Patch{
        private long reviewId;
        private long memberId;
        private long marketId;
        private String reviewContent;
        private String reviewCreateAt;
        private String reviewUpdateAt;

    }

    @AllArgsConstructor
    @Getter
    public static class Response{
        private long reviewId;
        private long memberId;
        private long marketId;
        private String reviewContent;
        private String reviewCreateAt;
        private String reviewUpdateAt;
    }


}
