package com.mainProject.seb39main32.favorite.repository;

import com.mainProject.seb39main32.favorite.entity.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
    Optional<Favorite> findByMarketIdAndMemberId(long marketId, long memberId);

    Optional<Favorite> findByMemberId(long memberId);
}
