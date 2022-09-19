package com.mainProject.seb39main32.market.repository;

import com.mainProject.seb39main32.market.entity.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {
    Optional<Market> findByMemberId(long memberId);
}
