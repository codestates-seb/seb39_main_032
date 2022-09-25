package com.mainProject.seb39main32.favorite.service;

import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.favorite.repository.FavoriteRepository;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Positive;
import java.util.Optional;

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

    public void deleteFavorite(long marketId, long memberId) {
        //Favorite favorite = findVerifiedFavorite(marketId,memberId);
        Favorite favorite = favoriteRepository.findByMarketIdAndMemberId(marketId, memberId);
        favoriteRepository.delete(favorite);
    }

    /*public Favorite findVerifiedFavorite(long marketId, long memberId){
        //Optional<Favorite> favorite = favoriteRepository.findByMarketIdAndMemberId(marketId,memberId);
        Optional<Favorite> favorite = favoriteRepository.findByMarket_MarketIdAndMember_MemberId(marketId,memberId);
        Favorite findFavorite = favorite.orElseThrow(() -> new BusinessLogicException(ExceptionCode.FAVORITE_NOT_FOUND));
        return findFavorite;
    }*/



}
