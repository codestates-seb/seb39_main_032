package com.mainProject.seb39main32.market.entity;

import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.favorite.entity.Favorite;
import com.mainProject.seb39main32.member.entity.Member;
import com.mainProject.seb39main32.review.entity.Review;
import lombok.Data;
import lombok.NoArgsConstructor;
import net.minidev.json.annotate.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Entity
@Data
@Table(name = "MARKET")
public class Market {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "market_id")
    private long marketId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(name = "market_name")
    private String marketName;

    @Column(name = "company_number")
    private String companyNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "phone")
    private String phone;

    @Column(name = "create_at")
    private String createAt;

    @Column(name = "update_at")
    private String updateAt;



    public void setMember(Member member){
        this.member = member;
    }

    @JsonIgnore
    @OneToMany(mappedBy = "market")
    private List<Favorite> favorites = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "market")
    private List<Board> boards = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "market")
    private List<Review> reviews = new ArrayList<>();

    /*public void add(Favorite favorite){
        favorite.setMarket(this);
        getFavorites().add(favorite);
    }*/
    public void setBoards(Board board){
        this.boards.add(board);
        if(board.getMarket() != this){
            board.setMarket(this);
        }
    }

    public void setReviews(Review review){
        this.reviews.add(review);
        if(review.getMarket() != this){
            review.setMarket(this);
        }
    }


}