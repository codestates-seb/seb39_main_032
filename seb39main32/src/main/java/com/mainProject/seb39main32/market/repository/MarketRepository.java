package com.mainProject.seb39main32.market.repository;

import com.mainProject.seb39main32.market.entity.Market;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MarketRepository extends JpaRepository<Market, Long> {
    Optional<Market> findByMarketId(long marketId);
    Page<Market> findByMember_MemberId( Pageable pageable,long memberId);
}
