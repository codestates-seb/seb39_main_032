package com.mainProject.seb39main32.board.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.member.entity.Member;
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
@Table(name = "BOARD")
public class Board {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "board_id")
    private long boardId;


    //----외래키----
//    @Column(name = "member_id")
//    private long memberId;
//
//    @ManyToOne
//    @JsonIgnore
//    @JoinColumn(name = "member_id", insertable = false, updatable = false)
//    private Member member;
//
//    @Column(name = "market_id")
//    private long marketId;
//
//    @ManyToOne
//    @JsonIgnore
//    @JoinColumn(name = "market_id", insertable = false, updatable = false)
//    private Market market;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "market_id")
    private Market market;
    //----------

    @Column(name = "item_name")
    private String itemName;

    @Column(name = "item_price")
    private long itemPrice;

    @Column(name = "category")
    private String foodCategory;

    @Column(name = "item_amount")
    private long itemAmount;

    @Column(name = "item_sale")
    private long itemSale;

    @Column(name = "sale_starttime")
    private String saleStartTime;

    @Column(name = "sale_endtime")
    private String saleEndTime;

    @Column(name = "create_at")
    private String boardCreateAt;

    @Column(name = "update_at")
    private String boardUpdateAt;

    @Column(name = "status")
    private String boardStatus;

    //-----양방향
    @OneToMany(mappedBy = "board")
    @JsonIgnore
    private List<Wish> wishes = new ArrayList<>();


    public void setMember(Member member){
        this.member = member;
    }

    public void setMarket(Market market){
        this.market = market;
    }
    //-----양방향


}
