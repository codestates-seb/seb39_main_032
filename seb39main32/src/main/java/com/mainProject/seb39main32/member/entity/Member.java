package com.mainProject.seb39main32.member.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.review.entity.Review;
import com.mainProject.seb39main32.wish.entity.Wish;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "MEMBER")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private long memberId;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String memberPw;


    @Column(name = "create_at")
    private String memberCreateAt;

    @Column(name = "update_at")
    private String memberUpdateAt;

    @Column(name = "auth")
    private String auth;

    //양방향 매핑을 위한 추가
    @OneToMany(mappedBy = "member")
    private List<Market> markets = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Favorite> favorites = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Wish> wishes = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Board> boards = new ArrayList<>();

    @OneToMany(mappedBy = "member")
    private List<Review> reviews = new ArrayList<>();


    public void add(Market market){
        market.setMember(this);
        getMarkets().add(market);
    }

    public void add(Favorite favorite){
        favorite.setMember(this);
        getFavorites().add(favorite);
    }

    public List<String> getAuthList() {
        if(this.auth.length() > 0) {
            return Arrays.asList(this.auth.split(","));
        }
        return new ArrayList<>();
    }


}
