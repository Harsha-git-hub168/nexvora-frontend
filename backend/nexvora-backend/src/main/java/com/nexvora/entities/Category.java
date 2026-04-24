package com.nexvora.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "category")  // match the table name you actually created
public class Category {
        @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int category_id;

	    @Column(nullable = false, unique = true)
	    private String category_name;

	    public Category() {}

	    public Category(int category_id, String category_name) {
	        this.category_id = category_id;
	        this.category_name = category_name;
	    }

	    // Getters & Setters
	    public int getCategory_id() { return category_id; }
	    public void setCategory_id(int category_id) { this.category_id = category_id; }

	    public String getCategory_name() { return category_name; }
	    public void setCategory_name(String category_name) { this.category_name = category_name; }
	}


