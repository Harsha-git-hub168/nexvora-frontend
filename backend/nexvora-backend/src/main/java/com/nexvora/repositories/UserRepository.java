package com.nexvora.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nexvora.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	// Custom method to find a user by username
    User findByUsername(String username);

    // Custom method to find a user by email
    User findByEmail(String email);

 // Check if username already exists (for registration)
    boolean existsByUsername(String username);

    // Check if email already exists (for registration)
    boolean existsByEmail(String email);
}
