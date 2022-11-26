package com.boot.demo.service;

import javax.persistence.EntityExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.demo.model.UserEntity;
import com.boot.demo.repo.UserEntityRepo;



@Service
public class UserEntityService {

	@Autowired
	private UserEntityRepo userEntityRepo;
	
	public UserEntity saveUser(UserEntity userEntity)
	{
		if(userEntityRepo.existsById(userEntity.getUsername()))
			throw new EntityExistsException("User with "+ userEntity.getUsername()+" already exists");
		return userEntityRepo.save(userEntity);
	}
}
