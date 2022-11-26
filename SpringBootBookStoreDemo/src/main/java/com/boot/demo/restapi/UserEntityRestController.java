package com.boot.demo.restapi;

import javax.persistence.EntityExistsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.demo.dto.AppResponse;
import com.boot.demo.dto.Messages;
import com.boot.demo.model.UserEntity;
import com.boot.demo.repo.UserEntityRepo;


@RestController
@RequestMapping("/user")
public class UserEntityRestController {

	@Autowired
	private UserEntityRepo userEntityRepo;
	
	@PostMapping
	public ResponseEntity<Object> saveUserEntity(UserEntity entity)
	{
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(this.userEntityRepo.save(entity));
		}
		catch(EntityExistsException e)
		{
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(new AppResponse(Messages.FAILURE, e.getMessage()));
		}
	}
}
