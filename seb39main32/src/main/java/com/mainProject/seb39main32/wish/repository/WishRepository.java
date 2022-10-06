package com.mainProject.seb39main32.wish.repository;

import com.mainProject.seb39main32.wish.entity.Wish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface WishRepository extends JpaRepository<Wish, Long> {
    Page<Wish> findByMember_MemberId(long memberId, Pageable pageable);
    Wish findByMember_MemberIdAndBoard_BoardId(long memberId, long BoardId);
}
