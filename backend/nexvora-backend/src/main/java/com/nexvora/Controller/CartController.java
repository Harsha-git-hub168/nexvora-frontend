package com.nexvora.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.nexvora.Services.CartService;
import com.nexvora.entities.Cart;

public class CartController {

	@Autowired
    private CartService cartService;

    @GetMapping("/{userId}")
    public List<Cart> getUserCart(@PathVariable int userId) {
        return cartService.getCartByUser(userId);
    }

    @PostMapping
    public Cart addToCart(@RequestBody Cart cart) {
        return cartService.addToCart(cart);
    }

    @PutMapping("/{id}")
    public Cart updateCart(@PathVariable int id, @RequestBody Cart cart) {
        cart.setId(id);
        return cartService.updateCart(cart);
    }

    @DeleteMapping("/{id}")
    public String removeFromCart(@PathVariable int id) {
        cartService.removeFromCart(id);
        return "Removed from cart successfully";
    }
}
