package com.mainProject.seb39main32.market.mapper;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.market.dto.MarketDto;
import com.mainProject.seb39main32.market.entity.Market;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MarketMapper {
    Market marketPostDtoToMarket(MarketDto.Post requestBody);
    Market marketPatchDtoToMarket(MarketDto.Patch requestBody);
    //MarketDto.Response marketToMarketResponseDto(Market createMarket);
    MarketDto.Response marketToMarketResponse(Market merket);
    List<MarketDto.Response> marketsToMarketResponseDtos(List<Market> market);
}
