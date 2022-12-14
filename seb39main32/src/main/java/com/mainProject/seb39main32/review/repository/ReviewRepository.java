package com.mainProject.seb39main32.review.repository;

import com.mainProject.seb39main32.review.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {
    Optional<Review> findByReviewId(long reviewId);
    Page<Review> findByMarket_MarketId(long marketId, Pageable pageable);
    Page<Review> findByMember_MemberId(long memberId, Pageable pageable);
    void deleteByMarket_marketId(long marketId);
}
