package com.mainProject.seb39main32.wish.dto;

import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.member.entity.Member;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class WishDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        private long boardId;
        private long memberId;
        public Member getMember(){
            Member member = new Member();
            member.setMemberId(memberId);
            return member;
        }
        public Board getBoard(){
            Board board = new Board();
            board.setBoardId(boardId);
            return board;
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch{
        private long wishId;
        @Setter(AccessLevel.NONE)
        private long boardId;
        @Setter(AccessLevel.NONE)
        private long memberId;

        public void setBoard(Board board) {this.boardId = board.getBoardId();}
        public void setMember(Member member) {this.memberId = member.getMemberId();}
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long wishId;
        @Setter(AccessLevel.NONE)
        private long boardId;
        @Setter(AccessLevel.NONE)
        private long memberId;

        public void setBoard(Board board) {this.boardId = board.getBoardId();}
        public void setMember(Member member) {this.memberId = member.getMemberId();}
    }
}
