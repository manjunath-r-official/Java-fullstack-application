package com.codewithme.fullstackbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codewithme.fullstackbackend.model.Register;
import com.codewithme.fullstackbackend.repository.RegisterRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class RegisterController {
	
	@Autowired
	private RegisterRepository registerRepository;
	
	@PostMapping("/register")
	Register registerUser(@RequestBody Register registerUser) {
		return registerRepository.save(registerUser);
	}
	
	@GetMapping("/all_users")
	List<Register> getRegisteredUsers(){
		return registerRepository.findAll();
	}
	
	
	
	

}
