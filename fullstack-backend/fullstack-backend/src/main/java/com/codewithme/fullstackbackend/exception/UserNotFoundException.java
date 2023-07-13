package com.codewithme.fullstackbackend.exception;

public class UserNotFoundException extends RuntimeException{

	public UserNotFoundException(Long id) {
		super("Could not find the User "+id);
	}

}
