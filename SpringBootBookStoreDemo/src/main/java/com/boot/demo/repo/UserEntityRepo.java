package com.boot.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.demo.model.UserEntity;

public interface UserEntityRepo extends JpaRepository<UserEntity, String>{

}
