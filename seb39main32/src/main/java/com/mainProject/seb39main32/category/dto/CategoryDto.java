package com.mainProject.seb39main32.category.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class CategoryDto {


    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post{
        private Long categoryId;
        private String foodCode;
        private String categoryName;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response{
        private Long categoryId;
        private String foodCode;
        private String categoryName;
    }


}
