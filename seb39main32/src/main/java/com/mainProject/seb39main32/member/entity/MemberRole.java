package com.mainProject.seb39main32.member.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum MemberRole {
    GUEST("ROLE_GUEST","비회원"),
    USER("ROLE_USER","일반 사용자"),
    SELFEMPLOYED("ROLE_SE","자영업자"),
    ADMIN("ROLE_ADMIN","관리자");

    private final String Key;
    private final String title;


}
