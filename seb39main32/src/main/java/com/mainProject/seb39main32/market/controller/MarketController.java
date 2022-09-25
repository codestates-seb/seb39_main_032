package com.mainProject.seb39main32.market.controller;


import com.mainProject.seb39main32.dto.SingleResponseDto;
import com.mainProject.seb39main32.market.dto.MarketDto;
import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.market.mapper.MarketMapper;
import com.mainProject.seb39main32.market.service.MarketService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/api/market")
@Valid
@Slf4j
public class MarketController {

    private final MarketService marketService;
    private final MarketMapper mapper;

    public MarketController(MarketService marketService, MarketMapper mapper) {
        this.marketService = marketService;
        this.mapper = mapper;
    }

    @GetMapping("/get/{memberId}")
    public ResponseEntity getMarket(@PathVariable @Positive long memberId){
        Market market = marketService.getMarket(memberId);
        MarketDto.Response response = mapper.MarketToMarketResponse(market);
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @PostMapping("/post")
    public ResponseEntity postMarket(@RequestBody MarketDto.Post requestBody){
        Market market = mapper.marketPostDtoToMarket(requestBody);
        Market createMarket = marketService.createMarket(market);
        MarketDto.Response response = mapper.marketToMarketResponseDto(createMarket);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    @PatchMapping("/patch/{market-id}")
    public ResponseEntity updateMarket(@PathVariable("market-id") @Positive long marketId,
                                       @Valid @RequestBody MarketDto.Patch requestBody){
        requestBody.setMarketId(marketId);
        System.out.println(requestBody.getMemberId());
        Market market = mapper.marketPatchDtoToMarket(requestBody);
        System.out.println(market.getMember());
        Market updateMarket = marketService.updateMarket(market);
        MarketDto.Response response = mapper.MarketToMarketResponse(updateMarket);
        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //굳이 필요한지 모르겠음.
//    @DeleteMapping("/{marketId}")
//    public ResponseEntity deleteMarket(){
//
//        return null;
//    }

}
