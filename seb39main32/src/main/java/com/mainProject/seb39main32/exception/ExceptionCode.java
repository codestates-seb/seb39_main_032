package com.mainProject.seb39main32.exception;

import lombok.Getter;

public enum ExceptionCode {
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User exists"),

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
