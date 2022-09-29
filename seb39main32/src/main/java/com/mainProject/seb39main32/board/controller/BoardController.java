package com.mainProject.seb39main32.board.controller;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.board.mapper.BoardMapper;
import com.mainProject.seb39main32.board.service.BoardService;
import com.mainProject.seb39main32.dto.MultiResponseDto;
import com.mainProject.seb39main32.dto.SingleResponseDto;
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
    public ResponseEntity getBoard(
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
    public ResponseEntity getBoards(@Positive @RequestParam int page,
                                    @Positive @RequestParam int size){
        Page<Board> pageBoard = boardService.findBoards(page,size);
        List<Board> boards = pageBoard.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.boardsToBoardResponseDtos(boards),
                        pageBoard),
                HttpStatus.OK);
    }


    @PostMapping
    public ResponseEntity postBoard(@Valid @RequestBody BoardDto.Post requestBody){
        System.out.println(LocalDateTime.now());
        Board board = mapper.boardPostToBoard(requestBody);
        Board createdBoard = boardService.createBoard(board);
        BoardDto.Response response = mapper.boardToBoardResponse(createdBoard);
        return new ResponseEntity<>(
                new SingleResponseDto<>(response),
                HttpStatus.CREATED);
    }


    @PatchMapping("{board-id}")
    public ResponseEntity patchBoard(
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
