package com.mainProject.seb39main32.favorite.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@NoArgsConstructor
@Data
@Entity
@Table(name = "FAVORITE")
public class Favorite {

    @Id
    @Column(name = "favorite_id")
    private long favoriteId;

    @Column(name = "member_id")
    private long memberId;

    @Column(name = "market_id")
    private long marketId;
}
