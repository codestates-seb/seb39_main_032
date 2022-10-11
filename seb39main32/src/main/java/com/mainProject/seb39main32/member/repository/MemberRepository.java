package com.mainProject.seb39main32.member.repository;

import com.mainProject.seb39main32.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    //Optional<Users> findByEmail(String email);
    //public Users findByEmail(String email);

    Optional<Member> findByEmail(String email);
}
