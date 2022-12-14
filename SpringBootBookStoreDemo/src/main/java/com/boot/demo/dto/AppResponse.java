package com.boot.demo.dto;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


 
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class AppResponse {

	private Messages message;
	private String info;
}
