package com.mainProject.seb39main32.category.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@Table(name = "CATEGORY")
public class Category {

    @Id
    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "food_code")
    private String foodCode;

    @Column(name = "category_name")
    private String categoryName;
}
