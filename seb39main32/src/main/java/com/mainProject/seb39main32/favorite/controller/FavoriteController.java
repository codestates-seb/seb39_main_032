package com.mainProject.seb39main32.favorite.controller;


import com.mainProject.seb39main32.dto.MultiResponseDto;
import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.favorite.mapper.FavoriteMapper;
import com.mainProject.seb39main32.favorite.repository.FavoriteRepository;
import com.mainProject.seb39main32.favorite.service.FavoriteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/favorites")
@Valid
@Slf4j
public class FavoriteController {

    private final FavoriteService favoriteService;
    private final FavoriteMapper mapper;
    private final FavoriteRepository repository;

    public FavoriteController(FavoriteService favoriteService, FavoriteMapper mapper, FavoriteRepository repository) {
        this.favoriteService = favoriteService;
        this.mapper = mapper;
        this.repository = repository;
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getFavorites(@PathVariable("member-id") @Positive long memberId, Pageable pageable){
        Page<Favorite> post = favoriteService.getFavorites(memberId,pageable);
        List<Favorite> posts = post.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.favoritesToFavoritesDto(posts), post), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity addFavorite(@RequestBody FavoriteDto.Post requestBody){
        Favorite favorite = mapper.favoritePostToFavorite(requestBody);
        Favorite createFavorite = favoriteService.createFavorite(favorite);
        FavoriteDto.Response response = mapper.favoriteToFavoriteResponse(createFavorite);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);

    }

    @DeleteMapping("/{market-id}/{member-id}")
    public ResponseEntity delFavorite(@PathVariable("market-id") @Positive long marketId, @PathVariable("member-id") @Positive long memberId){
        favoriteService.deleteFavorite(marketId,memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
