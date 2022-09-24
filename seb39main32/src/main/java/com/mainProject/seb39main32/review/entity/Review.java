package com.mainProject.seb39main32.review.entity;


import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "REVIEW")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private long reviewId;

    //-----외래키

    @Column(name= "member_id")
    private long memberId;

    @ManyToOne
    @JoinColumn(name = "member_id", insertable = false, updatable = false)
    private Member member;

    /*public void setMember(Member member){
        this.member = member;
    }*/

    /*@Column(name = "market_id")
    private long marketId;*/

    @ManyToOne
    @JoinColumn(name = "market_id")
    private Market market;

    public void setMarket(Market market){
        this.market = market;
    }

    //-----외래키

    @Column(name= "content")
    private String reviewContent;

    @Column(name= "create_at")
    private String reviewCreateAt;

    @Column(name= "update_at")
    private String reviewUpdateAt;


}
