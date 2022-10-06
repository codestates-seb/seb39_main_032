package com.mainProject.seb39main32.review.mapper;

import com.mainProject.seb39main32.review.dto.ReviewDto;
import com.mainProject.seb39main32.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReviewMapper {
    Review reviewPostToReview(ReviewDto.Post requestBody);

    ReviewDto.Response reviewToReviewResponse(Review createReview);

    Review reviewPatchDtoToReview(ReviewDto.Patch requestBody);

    default List<ReviewDto.Response> reviewToReviewsResponse(List<Review> reviews) {
        return reviews.stream().map(review -> ReviewDto.Response
                .builder()
                .reviewId(review.getReviewId())
                .marketId(review.getMarket().getMarketId())
                .memberId(review.getMember().getMemberId())
                .memberEmail(review.getMember().getEmail())
                .reviewContent(review.getReviewContent())
                .reviewCreateAt(review.getReviewCreateAt())
                .reviewUpdateAt(review.getReviewUpdateAt())
                .build())
                .collect(Collectors.toList());
    }

    default List<ReviewDto.MyResponse> reviewToReviewsMyResponse(List<Review> reviews) {
        return reviews.stream().map(review -> ReviewDto.MyResponse
                        .builder()
                        .reviewId(review.getReviewId())
                        .marketId(review.getMarket().getMarketId())
                        .marketName(review.getMarket().getMarketName())
                        .memberId(review.getMember().getMemberId())
                        .reviewContent(review.getReviewContent())
                        .reviewCreateAt(review.getReviewCreateAt())
                        .reviewUpdateAt(review.getReviewUpdateAt())
                        .build())
                .collect(Collectors.toList());
    }
}
