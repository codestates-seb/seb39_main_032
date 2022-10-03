package com.mainProject.seb39main32.market.mapper;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.market.dto.MarketDto;
import com.mainProject.seb39main32.market.entity.Market;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MarketMapper {
    Market marketPostDtoToMarket(MarketDto.Post requestBody);
    Market marketPatchDtoToMarket(MarketDto.Patch requestBody);
    //MarketDto.Response marketToMarketResponseDto(Market createMarket);
    MarketDto.Response marketToMarketResponse(Market merket);
//    default MarketDto.ResponseListDto marketToMarketResponseList(Market merket){
//
//    }
    List<MarketDto.Response> marketsToMarketsResponseDtos(List<Market> market);

//    default List<MarketDto.ResponseListDto> marketsToMarketResponseDtos(List<Market> market){
//        return market.stream().map(mrk -> MarketDto.ResponseListDto
//                        .builder()
//                        .marketId(mrk.getMarketId())
//                        .memberId(mrk.getMember().getMemberId())
//                        .marketName(mrk.getMarketName())
//                        .companyNumber(mrk.getCompanyNumber())
//                        .address(mrk.getAddress())
//                        .phone(mrk.getPhone())
//                        .createAt(mrk.getCreateAt())
//                        .updateAt(mrk.getUpdateAt())
//                        .boardList(mrk.getBoards().)
//                        .build())
//                .collect(Collectors.toList());
//    }
}
