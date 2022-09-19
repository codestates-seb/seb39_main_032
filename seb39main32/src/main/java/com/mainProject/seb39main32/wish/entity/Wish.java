package com.mainProject.seb39main32.wish.entity;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "WISH")
public class Wish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wish_id")
    private long wishId;
    //----외래키----
    @Column(name = "board_id")
    private long boardId;

    @Column(name = "member_id")
    private long memberId;
    //--------------
}
