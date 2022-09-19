package com.mainProject.seb39main32.review.controller;

import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.review.dto.ReviewDto;
import com.mainProject.seb39main32.review.entity.Review;
import com.mainProject.seb39main32.review.mapper.ReviewMapper;
import com.mainProject.seb39main32.review.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/api/review")
@Valid
@Slf4j
public class ReviewController {

    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    public ReviewController(ReviewService reviewService, ReviewMapper mapper) {
        this.reviewService = reviewService;
        this.mapper = mapper;
    }


    @GetMapping ("/get")
    public ResponseEntity getReview(){
        return null;
    }


    @PostMapping ("/post/{marketId}/{memberId}")
    public ResponseEntity postReview(@RequestBody ReviewDto.Post requestBody, @PathVariable("marketId") @Positive long marketId, @PathVariable("memberId") @Positive long memberId){

        requestBody.setMarketId(marketId);
        requestBody.setMemberId(memberId);
        Review review = mapper.reviewPostToReview(requestBody);
        Review createReview = reviewService.createReview(review);
        ReviewDto.Response response = mapper.reviewToReviewResponse(createReview);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    /*
    @PatchMapping("/patch/{reviewId}")
    public ResponseEntity patchReview(@PathVariable("reviewId") @Positive long reviewId, @Valid @RequestBody ReviewDto.Patch requestBody){

        requestBody.setReviewId(reviewId);
        Review review = mapper.reviewPatchDtoToReview(requestBody);
        Review updateReview = reviewService.updateReview(review);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.reviewToReviewResponse(updateReview)), HttpStatus.OK);
    }
    */



    @DeleteMapping("/delete/{reviewId}")
    public ResponseEntity deleteReview(@PathVariable("reviewId") @Positive long reviewId){
        reviewService.deleteReview(reviewId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
