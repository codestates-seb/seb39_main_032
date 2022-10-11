package com.mainProject.seb39main32.market.service;

import com.mainProject.seb39main32.board.repository.BoardRepository;
import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.favorite.repository.FavoriteRepository;
import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.market.repository.MarketRepository;
import com.mainProject.seb39main32.review.repository.ReviewRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MarketService {

    private final MarketRepository marketRepository;
    private final FavoriteRepository favoriteRepository;
    private final BoardRepository boardRepository;
    private final ReviewRepository reviewRepository;

    public MarketService(MarketRepository marketRepository, FavoriteRepository favoriteRepository, BoardRepository boardRepository, ReviewRepository reviewRepository) {
        this.marketRepository = marketRepository;
        this.favoriteRepository = favoriteRepository;
        this.boardRepository = boardRepository;
        this.reviewRepository = reviewRepository;
    }

    public Page<Market> getMarketMemberID( Pageable pageable, long memberId) {
        //Market findMarket = findVerifiedMarketMemberID(memberId);
        Page<Market> pageResult = marketRepository.findByMember_MemberId(pageable,memberId);
        return pageResult;
    }

    public Page<Market> getMarketMarkgetID( Pageable pageable,long markgetId) {
        Page<Market> pageResult = marketRepository.findByMarketId(pageable,markgetId);
        return pageResult;
    }

    public Market createMarket(Market market) {
        market.setCreateAt(String.valueOf(LocalDateTime.now()));
        market.setUpdateAt(String.valueOf(LocalDateTime.now()));
        marketRepository.save(market);
        return market;
    }

    public Market updateMarket(Market market) {

        Market findMarket = findVerifiedMarketMarkgetID(market.getMarketId());
        findMarket.setUpdateAt(String.valueOf(LocalDateTime.now()));
        Optional.ofNullable(market.getMarketName()).ifPresent(name -> findMarket.setMarketName(name));
        Optional.ofNullable(market.getCompanyNumber()).ifPresent(number -> findMarket.setCompanyNumber(number));
        Optional.ofNullable(market.getAddress()).ifPresent(address -> findMarket.setAddress(address));
        Optional.ofNullable(market.getPhone()).ifPresent(phone -> findMarket.setPhone(phone));
        Market updateMarket = marketRepository.save(findMarket);
        return updateMarket;

    }

    public List<Market> findVerifiedMarketMemberID(long memberID){
        List<Market> marketList = marketRepository.findByMember_MemberId(memberID);
        return marketList;
    }

    public Market findVerifiedMarketMarkgetID(long marketID){
        Optional<Market> OptionalMarket = marketRepository.findByMarketId(marketID);
        Market findMarket = OptionalMarket.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MARKET_NOT_FOUND));
        return findMarket;
    }

    /*
    private Market findMarket(long memberId) {
        Optional<Market> optionalMarket = marketRepository.findByMemberId(memberId);
        Market findMarket = optionalMarket.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MARKET_NOT_FOUND));
        return findMarket;
    }
     */

    public void deleteMarket(long marketId) {
        //Favorite favorite = findVerifiedFavorite(marketId,memberId);
        Market market = findVerifiedMarketMarkgetID(marketId);
        marketRepository.delete(market);
    }

}