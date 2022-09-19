package com.mainProject.seb39main32.board.service;

import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.board.repository.BoardRepository;
import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.member.entity.Member;
import com.mainProject.seb39main32.member.service.MemberService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
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
}