package com.mainProject.seb39main32.market.mapper;

import com.mainProject.seb39main32.market.dto.MarketDto;
import com.mainProject.seb39main32.market.entity.Market;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MarketMapper {
    Market marketPostDtoToMarket(MarketDto.Post requestBody);

    MarketDto.Response marketToMarketResponseDto(Market createMarket);

    Market marketPatchDtoToMarket(MarketDto.Patch requestBody);

    MarketDto.Response MarketToMarketResponse(Market updateMarket);
}
