package com.codewithme.fullstackbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithme.fullstackbackend.model.Register;

public interface RegisterRepository extends JpaRepository<Register, Long>{

}
