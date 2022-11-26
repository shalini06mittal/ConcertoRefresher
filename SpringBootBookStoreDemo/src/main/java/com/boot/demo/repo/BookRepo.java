package com.boot.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.demo.model.Book;
import com.boot.demo.model.UserEntity;

public interface BookRepo extends JpaRepository<Book, Integer>{

}
