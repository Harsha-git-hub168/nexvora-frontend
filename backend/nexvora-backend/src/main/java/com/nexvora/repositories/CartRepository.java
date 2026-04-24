package com.nexvora.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nexvora.entities.Cart;

public interface CartRepository extends JpaRepository<Cart, Integer> {
	List<Cart> findByUserId(int userId);  // Get all items for a user
	}


