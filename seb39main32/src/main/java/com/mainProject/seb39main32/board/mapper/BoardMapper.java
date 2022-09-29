package com.mainProject.seb39main32.board.mapper;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface BoardMapper {
    Board boardPostToBoard(BoardDto.Post requestBody);
    Board boardPatchToBoard(BoardDto.Patch requestBody);
    BoardDto.Response boardToBoardResponse(Board board);
    List<BoardDto.ResponseMarketName> boardsToBoardResponseDtos(List<Board> boards);
}
