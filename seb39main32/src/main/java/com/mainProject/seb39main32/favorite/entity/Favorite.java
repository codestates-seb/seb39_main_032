package com.mainProject.seb39main32.favorite.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.member.entity.Member;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table(name = "FAVORITE")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "favorite_id")
    private long favoriteId;

    @Column(name = "member_id")
    private long memberId;

    @Column(name = "market_id")
    private long marketId;

    @ManyToOne
    @JoinColumn(name = "member_id", insertable = false, updatable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "market_id", insertable = false, updatable = false)
    private Market market;

    /*public void setMember(Member member){
        this.member = member;
    }
    public void setMarket(Market market){

        this.market = market;
    }*/
}
