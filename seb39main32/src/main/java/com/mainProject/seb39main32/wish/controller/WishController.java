package com.mainProject.seb39main32.wish.controller;




import com.mainProject.seb39main32.config.oauth.PrincipalDetails;
import com.mainProject.seb39main32.dto.MultiResponseDto;
import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.wish.dto.WishDto;
import com.mainProject.seb39main32.wish.entity.Wish;
import com.mainProject.seb39main32.wish.mapper.WishMapper;
import com.mainProject.seb39main32.wish.repository.WishRepository;
import com.mainProject.seb39main32.wish.service.WishService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/wishes")
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
    public ResponseEntity<SingleResponseDto> postWish(@Valid @RequestBody WishDto.Post requestBody,
                                                      @AuthenticationPrincipal PrincipalDetails principalDetails){
        ResponseEntity<SingleResponseDto> responseEntity=null;
        if(principalDetails!=null) {
            Wish checkWish = wishService.findVerifiedWish(principalDetails.getMember().getMemberId(),requestBody.getBoardId());
            if(checkWish!=null){
                wishService.deleteWish(checkWish.getWishId());
                responseEntity = new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            else {
                requestBody.setMemberId(principalDetails.getMember().getMemberId());
                Wish wish = mapper.wishPostToWish(requestBody);
                Wish createdWish = wishService.createWish(wish);
                WishDto.Response response = mapper.wishToWishResponse(createdWish);
                responseEntity=new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);

            }
        }
        return responseEntity;
    }

    @GetMapping("/{wish-id}")
    public ResponseEntity<SingleResponseDto> getWish(
            @PathVariable("wish-id") @Positive long wishId) {
        Wish wish = wishService.findWish(wishId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.wishToWishResponse(wish))
                , HttpStatus.OK);
    }

    @GetMapping("/myWish")
    public ResponseEntity getMyWishes(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size,
                                    @AuthenticationPrincipal PrincipalDetails principalDetails){
        Pageable paging = PageRequest.of(page-1, size, Sort.by("wishId").descending());
        Page<Wish> wish = wishService.findWishes(principalDetails.getMember().getMemberId(),paging);
        List<Wish> wishes = wish.getContent();
        return new ResponseEntity<>(mapper.wiShToWishsResponse(wishes), HttpStatus.OK);
    }


    @PatchMapping("/{wish-id}")
    public ResponseEntity<SingleResponseDto> patchBoard(
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
