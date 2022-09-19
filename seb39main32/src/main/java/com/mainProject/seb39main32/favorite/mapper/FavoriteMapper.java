package com.mainProject.seb39main32.favorite.mapper;

import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface FavoriteMapper {
    Favorite favoritePostToFavorite(FavoriteDto.Post requestBody);

    FavoriteDto.Response favoriteToFavoriteResponse(Favorite createFavorite);
}
