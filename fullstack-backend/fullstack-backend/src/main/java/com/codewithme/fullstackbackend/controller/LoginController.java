package com.codewithme.fullstackbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codewithme.fullstackbackend.repository.LoginRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class LoginController {

	
	@Autowired
	private LoginRepository loginrepository;
	
	
	
}
