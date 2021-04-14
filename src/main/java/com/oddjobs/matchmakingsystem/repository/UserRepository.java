package com.oddjobs.matchmakingsystem.repository;

import com.oddjobs.matchmakingsystem.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
