package com.nexvora.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexvora.entities.User;
import com.nexvora.repositories.UserRepository;
@Service
public class UserService {
    @Autowired
	private UserRepository userRepository;

    // Method to register a new user
    public String registerUser(User user) {
        // Check if username already exists
        if(userRepository.findByUsername(user.getUsername()) != null) {
            return "Username already exists";
        }

        // Check if email already exists
        if(userRepository.findByEmail(user.getEmail()) != null) {
            return "Email already exists";
        }

        // Save user to database
        userRepository.save(user);

        return "User registered successfully";
    }
	
 // NEW: Login method
    public String loginUser(User user) {
        User existingUser = userRepository.findByUsername(user.getUsername());
        if (existingUser == null) {
            return "User not found";
        }

        // Plain-text password check (for now)
        if (!existingUser.getPassword().equals(user.getPassword())) {
            return "Incorrect password";
        }

        return "Login successful";
    }
	
}


