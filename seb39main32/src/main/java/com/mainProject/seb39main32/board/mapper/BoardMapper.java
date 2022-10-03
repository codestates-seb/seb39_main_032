package com.mainProject.seb39main32.board.mapper;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.wish.entity.Wish;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BoardMapper {
    Board boardPostToBoard(BoardDto.Post requestBody);
    Board boardPatchToBoard(BoardDto.Patch requestBody);
    BoardDto.Response boardToBoardResponse(Board board);
    //List<BoardDto.ResponseMarketName> boardsToBoardResponseDtos(List<Board> boards);
    default List<BoardDto.ResponseMarketName> boardsToBoardResponseDtos(List<Board> boards){
        return boards.stream().map(brd -> BoardDto.ResponseMarketName
                .builder()
                .boardId(brd.getBoardId())
                .memberId(brd.getMember().getMemberId())
                .marketId(brd.getMarket().getMarketId())
                .marketName(brd.getMarket().getMarketName())
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
}
