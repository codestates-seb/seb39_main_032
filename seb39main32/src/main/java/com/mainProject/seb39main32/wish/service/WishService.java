package com.mainProject.seb39main32.wish.service;

import com.mainProject.seb39main32.exception.BusinessLogicException;
import com.mainProject.seb39main32.exception.ExceptionCode;
import com.mainProject.seb39main32.member.service.MemberService;
import com.mainProject.seb39main32.wish.entity.Wish;
import com.mainProject.seb39main32.wish.repository.WishRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class WishService {
    private final WishRepository wishRepository;
    private final MemberService memberService;

    public WishService(WishRepository wishRepository, MemberService memberService) {
        this.wishRepository = wishRepository;
        this.memberService = memberService;
    }

    public Wish createWish(Wish wish) {
        Wish saveWish = wishRepository.save(wish);
        return saveWish;
    }

    public Wish updateWish(Wish wish){
        Wish findWish = findVerifiedWish(wish.getWishId());
        //change data
        Wish updateWish = wishRepository.save(findWish);
        return updateWish;
    }


    public Wish findWish(long wishId){
        return findVerifiedWish(wishId);
    }
    //페이징 처리하여 좋아요 누른 게시물 출력
    public Page<Wish> findWishes(long memberId, Pageable pageable) {
        return wishRepository.findByMember_MemberId(memberId,pageable);
    }

    public void deleteWish(long wishId){
        Wish findWish = findVerifiedWish(wishId);
        wishRepository.delete(findWish);
    }

    private Wish findVerifiedWish(long wishId){
        Optional<Wish> optionalWish = wishRepository.findById(wishId);
        Wish findWish =
                optionalWish.orElseThrow(()->
                        new BusinessLogicException(ExceptionCode.Wish_NOT_FOUND));
        return findWish;
    }


}
