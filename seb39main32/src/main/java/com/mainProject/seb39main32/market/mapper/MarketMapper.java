package com.mainProject.seb39main32.market.mapper;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.market.dto.MarketDto;
import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.review.dto.ReviewDto;
import com.mainProject.seb39main32.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import org.mapstruct.ap.shaded.freemarker.template.utility.StringUtil;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MarketMapper {
    Market marketPostDtoToMarket(MarketDto.Post requestBody);
    Market marketPatchDtoToMarket(MarketDto.Patch requestBody);
    //MarketDto.Response marketToMarketResponseDto(Market createMarket);
    MarketDto.Response marketToMarketResponse(Market merket);
    default MarketDto.ResponseListDto marketToMarketResponseDtos(Market market){
        List<Board> boards = market.getBoards();
        List<Review> reviews = market.getReviews();
        MarketDto.ResponseListDto marketResponseDto = new MarketDto.ResponseListDto();
        marketResponseDto.setMarketId(market.getMarketId());
        marketResponseDto.setMarketName(market.getMarketName());
        marketResponseDto.setCompanyNumber(market.getCompanyNumber());
        marketResponseDto.setAddress(market.getAddress());
        marketResponseDto.setPhone(market.getPhone());
        marketResponseDto.setCreateAt(market.getCreateAt());
        marketResponseDto.setUpdateAt(market.getUpdateAt());
        marketResponseDto.setMember(market.getMember());
        marketResponseDto.setBoardList(boardToMarketResponseDtos(boards));
        marketResponseDto.setReviewList(reviewToMarketResponseDtos(reviews));
        marketResponseDto.setFavoriteCount(market.getFavorites().size());
        return marketResponseDto;

    }

    default List<BoardDto.ResponseMarketName> boardToMarketResponseDtos(List<Board> boards){
        return boards
                .stream().filter(board -> board.getBoardStatus().equals("판매중"))
                        .map(brd -> BoardDto.ResponseMarketName
                        .builder()
                        .boardId(brd.getBoardId())
                        .memberId(brd.getMember().getMemberId())
                        .marketId(brd.getMarket().getMarketId())
                        .itemName(brd.getItemName())
                        .itemPrice(brd.getItemPrice())
                        .foodCategory(brd.getFoodCategory())
                        .itemAmount(brd.getItemAmount())
                        .itemSale(brd.getItemSale())
                        .saleStartTime(brd.getSaleStartTime())
                        .saleEndTime(brd.getSaleEndTime())
                        .boardCreateAt(brd.getBoardCreateAt())
                        .boardUpdateAt(brd.getBoardUpdateAt())
                        .boardStatus(brd.getBoardStatus())
                        .wishListCount(brd.getWishes().size())
                        .build())
                .collect(Collectors.toList());
    }

    default List<ReviewDto.Response> reviewToMarketResponseDtos(List<Review> review){
        return review
                .stream().map(rev -> ReviewDto.Response
                        .builder()
                        .reviewId(rev.getReviewId())
                        .memberId(rev.getMember().getMemberId())
                        .marketId(rev.getMarket().getMarketId())
                        .reviewContent(rev.getReviewContent())
                        .reviewCreateAt(rev.getReviewCreateAt())
                        .reviewUpdateAt(rev.getReviewUpdateAt())
                        .memberEmail(rev.getMember().getEmail())
                        .build())
                .collect(Collectors.toList());
    }






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
