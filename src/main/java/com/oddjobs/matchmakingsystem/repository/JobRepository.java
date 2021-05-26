package com.oddjobs.matchmakingsystem.repository;

import com.oddjobs.matchmakingsystem.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long>{
    
}