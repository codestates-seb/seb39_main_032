package com.mainProject.seb39main32.review.service;

import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.review.entity.Review;
import com.mainProject.seb39main32.review.repository.ReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class ReviewService {

    private final ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }


    public Page<Review> findReviews(long marketId, Pageable pageable) {
        return reviewRepository.findByMarket_MarketId(marketId, pageable);
    }

    public Review createReview(Review review) {
        review.setReviewCreateAt(String.valueOf(LocalDateTime.now()));
        review.setReviewUpdateAt(String.valueOf(LocalDateTime.now()));
        Review saveReview = reviewRepository.save(review);

        return saveReview;
    }

    public void deleteReview(long reviewId) {
        Review findReview = findverifiedReview(reviewId);
        reviewRepository.delete(findReview);
    }

    private Review findverifiedReview(long reviewId){
        Optional<Review> optionalReview = reviewRepository.findByReviewId(reviewId);
        Review findReview = optionalReview.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND));

        return findReview;
    }


    /*
    public Review updateReview(Review review) {
        Review findReview = findverifiedReview(review.getReviewId());
        Optional.ofNullable(review.getReviewContent()).ifPresent(content -> findReview.setReviewContent(content));
        findReview.setReviewUpdateAt(String.valueOf(LocalDateTime.now()));
        Review updateReview = reviewRepository.save(findReview);
        return updateReview;
    }
    */


}
