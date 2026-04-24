package com.nexvora.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nexvora.entities.Cart;
import com.nexvora.repositories.CartRepository;
@Service
public class CartService {
     
	@Autowired
    private CartRepository cartRepository;

    public List<Cart> getCartByUser(int userId) {
        return cartRepository.findByUserId(userId);
    }

    public Cart addToCart(Cart cart) {
        return cartRepository.save(cart);
    }

    public void removeFromCart(int cartId) {
        cartRepository.deleteById(cartId);
    }

    public Cart updateCart(Cart cart) {
        return cartRepository.save(cart);
    }
	
	
}
