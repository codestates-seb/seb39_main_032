package com.mainProject.seb39main32.review.controller;

import com.mainProject.seb39main32.dto.MultiResponseDto;
import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.review.dto.ReviewDto;
import com.mainProject.seb39main32.review.entity.Review;
import com.mainProject.seb39main32.review.mapper.ReviewMapper;
import com.mainProject.seb39main32.review.repository.ReviewRepository;
import com.mainProject.seb39main32.review.service.ReviewService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/reviews")
@Valid
@Slf4j
public class ReviewController {

    private final ReviewService reviewService;
    private final ReviewMapper mapper;

    private final ReviewRepository reviewRepository;

    public ReviewController(ReviewService reviewService, ReviewMapper mapper, ReviewRepository reviewRepository) {
        this.reviewService = reviewService;
        this.mapper = mapper;
        this.reviewRepository = reviewRepository;
    }


    @GetMapping ("/{market-id}")
    public ResponseEntity getReviews(@PathVariable("market-id") @Positive long marketId, Pageable pageable){
        Page<Review> review = reviewRepository.findByMarket_MarketId(marketId, pageable);
        List<Review> reviews = review.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.reviewToReviewsResponse(reviews),review), HttpStatus.OK );
    }


    @PostMapping ("/{market-Id}/{member-Id}")
    public ResponseEntity postReview(@RequestBody ReviewDto.Post requestBody, @PathVariable("market-Id") @Positive long marketId, @PathVariable("member-Id") @Positive long memberId){

        requestBody.setMarketId(marketId);
        requestBody.setMemberId(memberId);
        System.out.println("마켓: "+requestBody.getMarketId()+"멤버: "+requestBody.getMemberId());
        Review review = mapper.reviewPostToReview(requestBody);
        //System.out.println("1: "+ review.getMember().getMemberId());
        //System.out.println("2: "+ review.getMarket().getMarketId());
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
