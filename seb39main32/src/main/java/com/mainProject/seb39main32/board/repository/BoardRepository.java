package com.mainProject.seb39main32.board.repository;

import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardRepository extends JpaRepository<Board, Long> {
    Page<Board> findAll(Pageable pageable);
    Page<Board> findByBoardStatusNot(Pageable pageable,String status);
    Page<Board> findByMember_MemberIdAndBoardStatusNot(Pageable pageable,long memberId,String status);
    Page<Board> findByMember_MemberIdAndBoardStatus(Pageable pageable,long memberId,String status);
    Page<Board> findByMarket_AddressContainingAndBoardStatusNot(Pageable pageable,String adrress,String status);
    Page<Board> findByFoodCategoryAndBoardStatusNot(Pageable pageable,String category,String status);
    Page<Board> findByFoodCategoryAndBoardStatus(Pageable pageable,String category,String status);
    Page<Board> findByMarket_AddressContainingAndFoodCategoryAndBoardStatusNot(Pageable pageable,String adrress,String category,String status);

    Page<Board> findByMarket_AddressContainingAndFoodCategoryAndBoardStatus(Pageable pageable,String adrress,String category,String status);

    Page<Board> findByMarket_AddressContainingAndBoardStatus(Pageable pageable,String adrress,String status);

    Page<Board> findByBoardStatus(Pageable pageable,String status);
    void deleteByMarket_MarketId(long marketId);
}
