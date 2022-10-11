package com.mainProject.seb39main32.favorite.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.mainProject.seb39main32.market.entity.Market;
import com.mainProject.seb39main32.member.entity.Member;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Getter
@Setter
@Entity
@Table(name = "FAVORITE")
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "favorite_id")
    private long favoriteId;
//
//    @Column(name = "member_id")
//    private long memberId;
//
//    @Column(name = "market_id")
//    private long marketId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "market_id")
    private Market market;

    public void setMember(Member member){
        this.member = member;
    }
    public void setMarket(Market market){
        this.market = market;
    }
}
