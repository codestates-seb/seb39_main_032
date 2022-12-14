package com.mainProject.seb39main32.favorite.service;

import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.favorite.repository.FavoriteRepository;
import com.mainProject.seb39main32.wish.entity.Wish;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.validation.constraints.Positive;
import java.util.Optional;

@Transactional
@Service
public class FavoriteService {

    private final FavoriteRepository favoriteRepository;

    public FavoriteService(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }


    public Favorite createFavorite(Favorite favorite) {
        favoriteRepository.save(favorite);
        return favorite;

    }

    public Page<Favorite> getFavorites(long memberId, Pageable pageable) {
        return favoriteRepository.findByMember_MemberId(memberId,pageable);
    }

    public void deleteFavorite(long marketId, long memberId) {
        //Favorite favorite = findVerifiedFavorite(marketId,memberId);
        Favorite favorite = favoriteRepository.findByMarket_MarketIdAndMember_MemberId(marketId, memberId);
        favoriteRepository.delete(favorite);
    }
    public void deleteFavorite(long favoriteId) {
        //Favorite favorite = findVerifiedFavorite(marketId,memberId);
        Favorite favorite = favoriteRepository.findByFavoriteId(favoriteId);
        favoriteRepository.delete(favorite);
    }


    /*public Favorite findVerifiedFavorite(long marketId, long memberId){
        //Optional<Favorite> favorite = favoriteRepository.findByMarketIdAndMemberId(marketId,memberId);
        Optional<Favorite> favorite = favoriteRepository.findByMarket_MarketIdAndMember_MemberId(marketId,memberId);
        Favorite findFavorite = favorite.orElseThrow(() -> new BusinessLogicException(ExceptionCode.FAVORITE_NOT_FOUND));
        return findFavorite;
    }*/

    public Favorite findVerifiedFavorite(long memberId,long marketId){
        Favorite favorite= favoriteRepository.findByMarket_MarketIdAndMember_MemberId(marketId,memberId);
        return favorite;
    }



}
