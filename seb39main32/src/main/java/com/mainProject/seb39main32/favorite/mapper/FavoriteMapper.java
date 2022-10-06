package com.mainProject.seb39main32.favorite.mapper;

import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.market.entity.Market;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface FavoriteMapper {
    Favorite favoritePostToFavorite(FavoriteDto.Post requestBody);

    FavoriteDto.Response favoriteToFavoriteResponse(Favorite favorite);



    /*default FavoriteDto.Response favoriteToFavoriteResponseDto(Favorite favorite){
        List<Market> markets = (List<Market>) favorite.getMarket();
        FavoriteDto.Response favoriteResponseDto = new FavoriteDto.Response();
        favoriteResponseDto.setFavoriteId(favorite.getFavoriteId());
        favoriteResponseDto.setMember(favorite.getMember());
        favoriteResponseDto.setMarket(favorite.getMarket());

        return favoriteResponseDto;
    }*/

    default List<FavoriteDto.Response> favoritesToFavoritesDto(List<Favorite> posts) {
        return  posts.stream().map(favorite -> FavoriteDto.Response
                .builder()
                        .favoriteId(favorite.getFavoriteId())
                        .memberId(favorite.getMember().getMemberId())
                        .marketId(favorite.getMarket().getMarketId())
                        .marketName(favorite.getMarket().getMarketName())
                .build())
                .collect(Collectors.toList());
    }
}
