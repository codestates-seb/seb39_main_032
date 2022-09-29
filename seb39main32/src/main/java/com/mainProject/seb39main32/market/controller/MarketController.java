package com.mainProject.seb39main32.market.controller;


import com.mainProject.seb39main32.board.entity.Board;
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
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

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
     * @param memberId
     * @return
     */
//    @GetMapping("/{member-id}")
//    public ResponseEntity getMarkets(@PathVariable("member-id") @Positive long memberId){
//        Market market = marketService.getMarketMemberID(memberId);
//        MarketDto.Response response = mapper.marketToMarketResponse(market);
//        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
//    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMarkets(@PathVariable("member-id") @Positive long memberId,
                                     @Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Pageable paging = PageRequest.of(page-1, size, Sort.by("updateAt").descending());
        Page<Market> pageMarket = marketService.getMarketMemberID(paging,memberId);
        List<Market> market = pageMarket.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.marketsToMarketResponseDtos(market),
                        pageMarket),
                HttpStatus.OK);
    }

    /**
     * 마켓 등록하기
     * @param requestBody
     * @return
     */
    @PostMapping
    public ResponseEntity postMarket(@Valid @RequestBody MarketDto.Post requestBody){
        Market market = mapper.marketPostDtoToMarket(requestBody);
        Market createMarket = marketService.createMarket(market);
        MarketDto.Response response = mapper.marketToMarketResponse(createMarket);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }


    /**
     * 마켓 수정하기
     * @param marketId
     * @param requestBody
     * @return
     */
    @PatchMapping("/{market-id}")
    public ResponseEntity updateMarket(@PathVariable("market-id") @Positive long marketId,
                                       @Valid @RequestBody MarketDto.Patch requestBody){
        requestBody.setMarketId(marketId);

        Market market = mapper.marketPatchDtoToMarket(requestBody);
        Market updateMarket = marketService.updateMarket(market);
        MarketDto.Response response = mapper.marketToMarketResponse(updateMarket);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }


    /*//굳이 필요한지 모르겠음.
    @DeleteMapping("/{market-id}")
    public ResponseEntity deleteMarket(){
        return null;
    }*/

}