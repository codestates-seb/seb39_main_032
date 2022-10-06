package com.mainProject.seb39main32.wish.mapper;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.review.dto.ReviewDto;
import com.mainProject.seb39main32.review.entity.Review;
import com.mainProject.seb39main32.wish.dto.WishDto;
import com.mainProject.seb39main32.wish.entity.Wish;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface WishMapper {
    Wish wishPostToWish(WishDto.Post requestBody);
    Wish wishPatchToWish(WishDto.Patch requestBody);
    WishDto.Response wishToWishResponse(Wish wish);

    default List<WishDto.ItemNameResponse> wiShToWishsResponse(List<Wish> wishs) {
        return wishs.stream().map(wish -> WishDto.ItemNameResponse
                        .builder()
                        .wishId(wish.getWishId())
                        .boardId(wish.getBoard().getBoardId())
                        .boardName(wish.getBoard().getItemName())
                        .memberId(wish.getMember().getMemberId())
                        .build())
                .collect(Collectors.toList());
    }
}
