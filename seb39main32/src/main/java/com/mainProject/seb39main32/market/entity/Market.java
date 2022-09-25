package com.mainProject.seb39main32.market.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@NoArgsConstructor
@Data
@Entity
@Table(name = "MARKET")
public class Market {

    @Id
    @Column(name = "market_id")
    private long marketId;

    @Column(name = "member_id")
    private long memberId;

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
}
