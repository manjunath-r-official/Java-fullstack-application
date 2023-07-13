package com.codewithme.fullstackbackend.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class UserNotFoundAdvice {
	
	@ResponseBody
	@org.springframework.web.bind.annotation.ExceptionHandler(UserNotFoundException.class)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	public Map<String, String>	ExceptionHandler(UserNotFoundException e){
		Map<String, String> errorMsg = new HashMap<String,String>();
		errorMsg.put("errorMessage", e.getMessage());
		return errorMsg;
		
		
	}

}
