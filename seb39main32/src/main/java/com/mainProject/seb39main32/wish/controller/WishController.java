package com.mainProject.seb39main32.wish.controller;




import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.wish.dto.WishDto;
import com.mainProject.seb39main32.wish.entity.Wish;
import com.mainProject.seb39main32.wish.mapper.WishMapper;
import com.mainProject.seb39main32.wish.service.WishService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/api/wish")
@Validated
@Slf4j
public class WishController {
    private final WishService wishService;
    private final WishMapper mapper;

    public WishController(WishService wishService, WishMapper mapper) {
        this.wishService = wishService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postWish(@Valid @RequestBody WishDto.Post requestBody){
        Wish wish = mapper.wishPostToWish(requestBody);
        Wish createdWish = wishService.createWish(wish);
        WishDto.Response response = mapper.wishToWishResponse(createdWish);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }

    @GetMapping("{wish-id}")
    public ResponseEntity getWish(
            @PathVariable("wish-id") @Positive long wishId) {
        Wish wish = wishService.findWish(wishId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.wishToWishResponse(wish))
                , HttpStatus.OK);
    }


    @PatchMapping("{wish-id}")
    public ResponseEntity patchBoard(
            @PathVariable("wish-id") @Positive long wishId,
            @Valid @RequestBody WishDto.Patch requestBody) {
        requestBody.setWishId(wishId);
        Wish wish =
                wishService.updateWish(mapper.wishPatchToWish(requestBody));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.wishToWishResponse(wish)),
                HttpStatus.OK);
    }

    @DeleteMapping("{wish-id}")
    public ResponseEntity deleteWish(
            @PathVariable("wish-id") @Positive long wishId) {
        wishService.deleteWish(wishId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
