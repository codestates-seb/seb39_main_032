package com.mainProject.seb39main32.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "User not found"),
    MEMBER_EXISTS(409, "User exists"),
    MEMBER_NOT_MATCH(405, "UserId not match"),
    Wish_NOT_FOUND(404,"Wish not found"),
    BOARD_NOT_FOUND(404, "Board not found"),
    REVIEW_NOT_FOUND(404, "Review not found"),

    FAVORITE_NOT_FOUND(404, "Favorite not found"),

    MARKET_NOT_FOUND(404, "Market not found");



    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
