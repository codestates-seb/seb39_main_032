package com.mainProject.seb39main32.board.entity;


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
    @Column(name = "member_id")
    private long memberId;

    @Column(name = "market_id")
    private long marketId;
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

    @Column(name = "item_time")
    private String itemTime;

    @Column(name = "create_at")
    private String boardCreateAt;

    @Column(name = "update_at")
    private String boardUpdateAt;

    @Column(name = "status")
    private String boardStatus;
}
