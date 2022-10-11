package com.mainProject.seb39main32.favorite.controller;


import com.mainProject.seb39main32.config.oauth.PrincipalDetails;
import com.mainProject.seb39main32.dto.MultiResponseDto;
import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.favorite.dto.FavoriteDto;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.favorite.mapper.FavoriteMapper;
import com.mainProject.seb39main32.favorite.repository.FavoriteRepository;
import com.mainProject.seb39main32.favorite.service.FavoriteService;
import com.mainProject.seb39main32.wish.dto.WishDto;
import com.mainProject.seb39main32.wish.entity.Wish;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
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

    @GetMapping("/myFavorite")
    public ResponseEntity<MultiResponseDto> getFavorites(@Positive @RequestParam int page,
                                                         @Positive @RequestParam int size,
                                                         @AuthenticationPrincipal PrincipalDetails principalDetails){

        Pageable paging = PageRequest.of(page-1,size, Sort.by("favoriteId").descending());

        Page<Favorite> post = favoriteService.getFavorites(principalDetails.getMember().getMemberId(),paging);

        List<Favorite> posts = post.getContent();
        return new ResponseEntity<>(new MultiResponseDto<>(mapper.favoritesToFavoritesDto(posts), post), HttpStatus.OK);
    }

//    @PostMapping()
//    public ResponseEntity<SingleResponseDto> addFavorite(@RequestBody FavoriteDto.Post requestBody,
//                                                         @AuthenticationPrincipal PrincipalDetails principalDetails){
//        Favorite favorite=null;
//        if(principalDetails!=null) {
//            requestBody.setMember(principalDetails.getMember());
//        }
//        favorite = mapper.favoritePostToFavorite(requestBody);
//        Favorite createFavorite = favoriteService.createFavorite(favorite);
//        FavoriteDto.Response response = mapper.favoriteToFavoriteResponse(createFavorite);
//        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
//    }
@PostMapping
public ResponseEntity<SingleResponseDto> postFavorite(@RequestBody FavoriteDto.Post requestBody,
                                                         @AuthenticationPrincipal PrincipalDetails principalDetails){
    ResponseEntity<SingleResponseDto> responseEntity=null;
    if(principalDetails!=null) {
        Favorite checkFavorite = favoriteService.findVerifiedFavorite(principalDetails.getMember().getMemberId(),requestBody.getMarketId());
        if(checkFavorite!=null){
            favoriteService.deleteFavorite(checkFavorite.getFavoriteId());
            responseEntity = new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else {
            requestBody.setMember(principalDetails.getMember());
            Favorite favorite = mapper.favoritePostToFavorite(requestBody);
            Favorite createFavorite = favoriteService.createFavorite(favorite);
            FavoriteDto.Response response = mapper.favoriteToFavoriteResponse(createFavorite);
            responseEntity=new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);

        }
    }
    return responseEntity;
}

    @DeleteMapping()
    public ResponseEntity delFavorite(@Positive @RequestParam long marketId,
                                      @AuthenticationPrincipal PrincipalDetails principalDetails){
        favoriteService.deleteFavorite(marketId,principalDetails.getMember().getMemberId());
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
