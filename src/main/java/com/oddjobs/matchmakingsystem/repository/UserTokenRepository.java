package com.oddjobs.matchmakingsystem.repository;

import com.oddjobs.matchmakingsystem.model.UserToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserTokenRepository extends JpaRepository<UserToken, Long> {

}
