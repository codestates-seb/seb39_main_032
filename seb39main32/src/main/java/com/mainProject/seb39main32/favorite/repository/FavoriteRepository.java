package com.mainProject.seb39main32.favorite.repository;

import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {

    Page<Favorite> findByMember_MemberId(long memberId, Pageable pageable);

    Favorite findByMarket_MarketIdAndMember_MemberId(long marketId, long memberId);



    //Favorite findByMember_MemberId(long memberId);
    /*Optional<Favorite> findByMarket_MarketIdAndMember_MemberId(long marketId, long memberId);

    //@Query(value = "SELECT * FROM FAVORITE  WHERE member_id = :memberId", nativeQuery = true)
    Optional<Favorite> findByMember_MemberId(long memberId);

    Page<Favorite> findByMember(Member member, Pageable pageable);

    Favorite findByMemberId(long memberId);*/
}
