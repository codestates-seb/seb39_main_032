package com.mainProject.seb39main32.review.entity;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table(name = "REVIEW")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private long reviewId;

    @Column(name= "member_id")
    private long memberId;

    @Column(name = "market_id")
    private long marketId;

    @Column(name= "content")
    private String reviewContent;

    @Column(name= "create_at")
    private String reviewCreateAt;

    @Column(name= "update_at")
    private String reviewUpdateAt;

}
