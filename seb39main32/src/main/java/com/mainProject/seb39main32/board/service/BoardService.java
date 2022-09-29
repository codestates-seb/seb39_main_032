package com.mainProject.seb39main32.board.service;

import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.board.repository.BoardRepository;
import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.member.service.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class BoardService {
    private final BoardRepository boardRepository;
    private final MemberService memberService;

    public BoardService(BoardRepository boardRepository, MemberService memberService) {
        this.boardRepository = boardRepository;
        this.memberService = memberService;
    }


    public Board createBoard(Board board) {
        board.setBoardCreateAt(String.valueOf(LocalDateTime.now()));
        board.setBoardUpdateAt(String.valueOf(LocalDateTime.now()));
        Board saveBoard = boardRepository.save(board);
        return saveBoard;
    }

    public Board updateBoard(Board board){
        Board findBoard = findVerifiedBoard(board.getBoardId());
        //change data
        Board updateBoard = boardRepository.save(findBoard);
        return updateBoard;
    }

    public Board updateBoardView(long boardId){
        Board findBoard = findVerifiedBoard(boardId);
        //viewUP
        Board updateBoard = boardRepository.save(findBoard);
        return updateBoard;
    }

    public Board updateBoardSoldOut(long boardId){
        Board findBoard = findVerifiedBoard(boardId);
        //chaneStatus SoldOut
        Board updateBoard = boardRepository.save(findBoard);
        return updateBoard;
    }

    public Board findBoard(long boardId){
        return findVerifiedBoard(boardId);
    }
    public Page<Board> findBoards(int page, int size){
        return boardRepository.findAll(PageRequest.of(page-1,size, Sort.by("boardUpdateAt").descending()));
    }

    public void deleteBoard(long boardId){
        Board findBoard = findVerifiedBoard(boardId);
        findBoard.setBoardUpdateAt(String.valueOf(LocalDateTime.now()));
        findBoard.setBoardStatus("delete");
        Board updateBoard = boardRepository.save(findBoard);
    }


    private Board findVerifiedBoard(long boardId){
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        Board findBoard =
                optionalBoard.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
        return findBoard;
    }

    public Page<Board> getPBoards(Pageable pageable) {
        return boardRepository.findAll(pageable);
    }

    public List<Board> getBoards() {
        return boardRepository.findAll();
    }
}