package com.Resume.Resume.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.Resume.Resume.Model.Model;

public interface Repository extends JpaRepository<Model,Long>{
    @Query(value = "SELECT COUNT(*) FROM resume_autth WHERE email = :username AND password = :password",nativeQuery = true)
    long countByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
