package com.mainProject.seb39main32.market.entity;

import com.mainProject.seb39main32.board.entity.Board;
import com.mainProject.seb39main32.member.entity.Member;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void setMember(Member member){
        this.member = member;
    }


    /*@OneToMany(mappedBy = "market")
    private List<Favorite> favorites = new ArrayList<>();
*/
    @OneToMany(mappedBy = "market")
    private List<Board> boards = new ArrayList<>();

    /*public void add(Favorite favorite){
        favorite.setMarket(this);
        getFavorites().add(favorite);
    }*/


}
