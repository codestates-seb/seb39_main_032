package com.mainProject.seb39main32.member.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@NoArgsConstructor
@Data
@Entity
@Table(name = "MEMBER")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private long memberId;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String memberPw;


    @Column(name = "create_at")
    private String memberCreateAt;

    @Column(name = "update_at")
    private String memberUpdateAt;

    @Column(name = "auth")
    private String auth;



    public List<String> getAuthList() {
        if(this.auth.length() > 0) {
            return Arrays.asList(this.auth.split(","));
        }
        return new ArrayList<>();
    }


}
