package com.codewithme.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithme.fullstackbackend.model.User;

public interface UserRepository extends JpaRepository<User, Long>{
	

}
