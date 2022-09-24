package com.mainProject.seb39main32.favorite.controller;


import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.favorite.mapper.FavoriteMapper;
import com.mainProject.seb39main32.favorite.repository.FavoriteRepository;
import com.mainProject.seb39main32.favorite.service.FavoriteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Optional;

@RestController
@RequestMapping("/api/favorite")
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

    @GetMapping("/get/{memberId}")
    public ResponseEntity getFavorite(@PathVariable("memberId") @Positive long memberId){
        Optional<Favorite> optionalfavorite = repository.findByMemberId(memberId);
        Favorite favorite = optionalfavorite.orElseThrow(() -> new BusinessLogicException(ExceptionCode.FAVORITE_NOT_FOUND));
        return new ResponseEntity<>(favorite, HttpStatus.OK);
    }

    /*@GetMapping("/get/memberId}")
    public ResponseEntity getFavorite(@PathVariable("memberId") @Positive long memberId){
        Favorite favorite = favoriteService.getFavorite(memberId);
        return null;
    }*/

    @PostMapping()
    public ResponseEntity addFavorite(@RequestBody FavoriteDto.Post requestBody){
        Favorite favorite = mapper.favoritePostToFavorite(requestBody);
        Favorite createFavorite = favoriteService.createFavorite(favorite);
        FavoriteDto.Response response = mapper.favoriteToFavoriteResponse(createFavorite);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{marketId}/{memberId}")
    public ResponseEntity delFavorite(@PathVariable("marketId") @Positive long marketId, @PathVariable("memberId") @Positive long memberId){
        favoriteService.deleteFavorite(marketId,memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
