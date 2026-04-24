package com.nexvora.Services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexvora.entities.Product;
import com.nexvora.repositories.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Add a product
    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    // Update a product
    public Product updateProduct(Product product) {
        // product_id is used as primary key
        return productRepository.save(product);
    }

    // Get product by id
    public Optional<Product> getProductById(int id) {
        return productRepository.findById(id);
    }

    // Delete product
    public void deleteProduct(int id) {
        productRepository.deleteById(id);
    }
    
 // NEW METHOD (for category products)
    public List<Product> getProductsByCategory(int categoryId) {
        return productRepository.getProductsByCategory(categoryId);
    }

}
