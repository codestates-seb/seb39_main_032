package com.mainProject.seb39main32.wish.mapper;

import com.mainProject.seb39main32.board.dto.BoardDto;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.wish.dto.WishDto;
import com.mainProject.seb39main32.wish.entity.Wish;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface WishMapper {
    Wish wishPostToWish(WishDto.Post requestBody);
    Wish wishPatchToWish(WishDto.Patch requestBody);
    WishDto.Response wishToWishResponse(Wish wish);
}
