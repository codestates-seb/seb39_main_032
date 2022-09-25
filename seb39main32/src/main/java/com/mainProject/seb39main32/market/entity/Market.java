package com.mainProject.seb39main32.market.entity;

import com.mainProject.seb39main32.member.entity.Member;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Data
@Entity
@Table(name = "MARKET")
public class Market {

    @Id
    @Column(name = "market_id")
    private long marketId;

//    @Column(name = "member_id")
//    private long memberId;

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
}
