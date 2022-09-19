package com.mainProject.seb39main32.review.mapper;

import com.mainProject.seb39main32.review.dto.ReviewDto;
import com.mainProject.seb39main32.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface ReviewMapper {
    Review reviewPostToReview(ReviewDto.Post requestBody);

    ReviewDto.Response reviewToReviewResponse(Review createReview);

    Review reviewPatchDtoToReview(ReviewDto.Patch requestBody);
}
