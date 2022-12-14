package com.mainProject.seb39main32.market.controller;


import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.config.oauth.PrincipalDetails;
import com.mainProject.seb39main32.dto.MultiResponseDto;
import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.market.dto.MarketDto;
import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.market.mapper.MarketMapper;
import com.mainProject.seb39main32.market.service.MarketService;
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
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/markets")
@Valid
@Slf4j
public class MarketController {

    private final MarketService marketService;
    private final MarketMapper mapper;

    public MarketController(MarketService marketService, MarketMapper mapper) {
        this.marketService = marketService;
        this.mapper = mapper;
    }

    /**
     * 마켓 정보 가져오기
     * @param
     * @return
     */
//    @GetMapping("/{member-id}")
//    public ResponseEntity getMarkets(@PathVariable("member-id") @Positive long memberId){
//        Market market = marketService.getMarketMemberID(memberId);
//        MarketDto.Response response = mapper.marketToMarketResponse(market);
//        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
//    }

    @GetMapping("/myMarket")
    public ResponseEntity<MultiResponseDto> getMyMarkets(@Positive @RequestParam int page,
                                                             @Positive @RequestParam int size,
                                                             @AuthenticationPrincipal PrincipalDetails principalDetails){
        Pageable paging = PageRequest.of(page-1, size, Sort.by("updateAt").descending());
        Page<Market> pageMarket = marketService.getMarketMemberID(paging,principalDetails.getMember().getMemberId());
        List<Market> market = pageMarket.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.marketsToMarketsResponseDtos(market),
                        pageMarket),
                HttpStatus.OK);
    }

//    @GetMapping("/getMarket/{market-id}")
//    public ResponseEntity<MultiResponseDto> getMarkets(@PathVariable("market-id") @Positive long marketId,
//                                                       @Positive @RequestParam int page,
//                                                       @Positive @RequestParam int size){
//        Pageable paging = PageRequest.of(page-1, size, Sort.by("updateAt").descending());
//        Page<Market> pageMarket = marketService.getMarketMarkgetID(paging,marketId);
//        List<Market> market = pageMarket.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.marketsToMarketsResponseDtos(market),
//                        pageMarket),
//                HttpStatus.OK);
//    }

//    @GetMapping("/{market-id}")
//    public ResponseEntity getMarkets(@PathVariable("market-id") @Positive long marketId) {
//        Market market = marketService.findVerifiedMarketMarkgetID(marketId);
//        return new ResponseEntity<>(
//                new SingleResponseDto<>(mapper.marketToMarketResponseDtos(market))
//                , HttpStatus.OK);
//    }
    @GetMapping("/{market-id}")
    public ResponseEntity getMarkets(@PathVariable("market-id") @Positive long marketId,
                                     @AuthenticationPrincipal PrincipalDetails principalDetails) {

        Market market = marketService.findVerifiedMarketMarkgetID(marketId);


        MarketDto.ResponseListDto responseListDto = mapper.marketToMarketResponseDtos(market);

        if(principalDetails!=null) {
            if(market.getFavorites().stream().filter(fav->fav.getMember().getMemberId()==principalDetails.getMember().getMemberId()).collect(Collectors.toList()).size()>0){
                responseListDto.setCheckMyFavorite(1);
            }
            responseListDto.getReviewList().stream()
                    .filter(rev -> rev.getMemberId() == principalDetails.getMember().getMemberId())
                    .collect(Collectors.toList())
                    .forEach(li -> li.setCheckOwner(1));
        }
        return new ResponseEntity<>(
            new SingleResponseDto<>(responseListDto)
            , HttpStatus.OK);
    }
    /**
     * 마켓 등록하기
     * @param requestBody
     * @return
     */
    @PostMapping
    public ResponseEntity<SingleResponseDto> postMarket(@Valid @RequestBody MarketDto.Post requestBody,
                                                        @AuthenticationPrincipal PrincipalDetails principalDetails){
        ResponseEntity<SingleResponseDto> responseEntity= null;

        //이미 등록한 마켓이 있을경우 등록 불가
        if(marketService.findVerifiedMarketMemberID(principalDetails.getMember().getMemberId()).size()==0) {
            requestBody.setMemberId(principalDetails.getMember().getMemberId());
            Market market = mapper.marketPostDtoToMarket(requestBody);
            Market createMarket = marketService.createMarket(market);
            MarketDto.Response response = mapper.marketToMarketResponse(createMarket);
            responseEntity=new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
        }
        else{
            responseEntity = new ResponseEntity<>(HttpStatus.NOT_EXTENDED);
        }
        return responseEntity;
    }


    /**
     * 마켓 수정하기
     * @param marketId
     * @param requestBody
     * @return
     */
    @PatchMapping("/{market-id}")
    public ResponseEntity<SingleResponseDto> updateMarket(@PathVariable("market-id") @Positive long marketId,
                                                          @Valid @RequestBody MarketDto.Patch requestBody,
                                                          @AuthenticationPrincipal PrincipalDetails principalDetails) {
        ResponseEntity<SingleResponseDto> responseEntity = null;
        //마켓의 사업자의 사용자 아이디와 현재 로그인한 사용자 아이디가 다를경우 수정 불가
        if (marketService.findVerifiedMarketMarkgetID(marketId).getMember().getMemberId() == principalDetails.getMember().getMemberId()){
            requestBody.setMarketId(marketId);
            requestBody.setMemberId(principalDetails.getMember().getMemberId());
            Market market = mapper.marketPatchDtoToMarket(requestBody);
            Market updateMarket = marketService.updateMarket(market);
            MarketDto.Response response = mapper.marketToMarketResponse(updateMarket);
            responseEntity = new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
        }
        else{
            responseEntity= new ResponseEntity<>(HttpStatus.NOT_MODIFIED);
        }

        return responseEntity;
    }



    @DeleteMapping("/{market-id}")
    public ResponseEntity deleteMarket(@PathVariable("market-id") @Positive long marketId){
        marketService.deleteMarket(marketId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

//    public ResponseEntity delFavorite(@Positive @RequestParam long marketId,
//                                      @AuthenticationPrincipal PrincipalDetails principalDetails){
//        favoriteService.deleteFavorite(marketId,principalDetails.getMember().getMemberId());
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}