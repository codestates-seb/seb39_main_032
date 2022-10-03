package com.mainProject.seb39main32.board.controller;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.board.mapper.BoardMapper;
import com.mainProject.seb39main32.board.service.BoardService;
import com.mainProject.seb39main32.dto.MultiResponseDto;
import com.mainProject.seb39main32.dto.SingleResponseDto;
import io.swagger.annotations.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/boards")
@Validated
@Slf4j
public class BoardController {
    private final BoardService boardService;
    private final BoardMapper mapper;

    public BoardController(BoardService boardService, BoardMapper mapper) {
        this.boardService = boardService;
        this.mapper = mapper;
    }

    @GetMapping("/{board-id}")
    public ResponseEntity<SingleResponseDto> getBoard(
            @PathVariable("board-id") @Positive long boardId) {
        Board board = boardService.findBoard(boardId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.boardToBoardResponse(board))
                , HttpStatus.OK);
    }
//
//    //페이징처리
//    @GetMapping("/page")
//    public ResponseEntity getPBoards(Pageable pageable){
//        Page<Board> boards = boardService.getPBoards(pageable);
//        return new ResponseEntity<>(boards, HttpStatus.OK);
//    }


    @GetMapping
    public ResponseEntity<MultiResponseDto> getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size){
        Page<Board> pageBoard = boardService.findBoards(page,size);
        List<Board> boards = pageBoard.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.boardsToBoardResponseDtos(boards),
                        pageBoard),
                HttpStatus.OK);
    }



//    @ApiImplicitParams({
//            @ApiImplicitParam(name = "memberId",value = "멤버아이디",required = true),
//            @ApiImplicitParam(name = "marketId",value = "가게이이디",required = true),
//            @ApiImplicitParam(name = "itemName",value = "상품명",required = true,dataType = "string"),
//            @ApiImplicitParam(name = "itemPrice",value = "상품가격",required = true),
//            @ApiImplicitParam(name = "foodCategory",value = "상품카테고리",required = true,dataType = "string"),
//            @ApiImplicitParam(name = "itemAmount",value = "상품갯수",required = true),
//            @ApiImplicitParam(name = "itemSale",value = "상품세일가격",required = true),
//            @ApiImplicitParam(name = "saleStartTime",value = "세일시작시간",required = true,dataType = "string"),
//            @ApiImplicitParam(name = "saleEndTime",value = "세일만료시간",required = true,dataType = "string"),
//            @ApiImplicitParam(name = "boardCreateAt",value = "상품등록 게시시간",required = true,dataType = "string"),
//            @ApiImplicitParam(name = "boardUpdateAt",value = "상품등록 수정시간",required = true,dataType = "string"),
//            @ApiImplicitParam(name = "boardStatus",value = "판매중,품절",required = true,dataType = "string")
//    })
    @PostMapping
    public ResponseEntity<SingleResponseDto> postBoard(@Valid @RequestBody  BoardDto.Post requestBody){
        System.out.println(LocalDateTime.now());
        Board board = mapper.boardPostToBoard(requestBody);
        Board createdBoard = boardService.createBoard(board);
        BoardDto.Response response = mapper.boardToBoardResponse(createdBoard);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }


    @PatchMapping("{board-id}")
    public ResponseEntity<SingleResponseDto> patchBoard(
            @PathVariable("board-id") @Positive long boardId,
            @Valid @RequestBody BoardDto.Patch requestBody) {
        requestBody.setBoardId(boardId);
        Board board =
                boardService.updateBoard(mapper.boardPatchToBoard(requestBody));
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.boardToBoardResponse(board)),
                HttpStatus.OK);
    }

    @DeleteMapping("{board-id}")
    public ResponseEntity deleteBoard(
            @PathVariable("board-id") @Positive long boardId) {
        boardService.deleteBoard(boardId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
