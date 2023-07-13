package com.codewithme.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithme.fullstackbackend.model.Login;

public interface LoginRepository extends JpaRepository<Login, Long>{
	

}
