package com.mainProject.seb39main32.category.controller;

import com.mainProject.seb39main32.category.entity.Category;
import com.mainProject.seb39main32.category.repository.CategoryRepository;
import com.mainProject.seb39main32.category.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/categories")
@Valid
@Slf4j
public class CategoryController {

    private final CategoryService categoryService;
    private final CategoryRepository categoryRepository;

    public CategoryController(CategoryService categoryService, CategoryRepository categoryRepository) {
        this.categoryService = categoryService;
        this.categoryRepository = categoryRepository;
    }


    @GetMapping
    public ResponseEntity getCategories(){

        List<Category> categories = categoryRepository.findAll();

        return new ResponseEntity(categories, HttpStatus.OK);
    }


}
