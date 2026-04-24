package com.nexvora.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nexvora.entities.Category;
import com.nexvora.repositories.CategoryRepository;

@RestController
	@RequestMapping("/api/categories")
	@CrossOrigin(origins = "*")
	public class CategoryController {

	    @Autowired
	    private CategoryRepository categoryRepository;

	    @GetMapping
	    public List<Category> getAllCategories() {
	        return categoryRepository.findAll();
	    }

}
