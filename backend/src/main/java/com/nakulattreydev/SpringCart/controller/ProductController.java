package com.nakulattreydev.SpringCart.controller;

import org.springframework.web.bind.annotation.RestController;

import com.nakulattreydev.SpringCart.model.ProductModel;
import com.nakulattreydev.SpringCart.service.ProductService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController 
{
    @Autowired
    private ProductService service;

    @RequestMapping("/")
    public String greet()
    {
        return "Hello Nakul";
    }

    @GetMapping("/products")
    public List<ProductModel> getAllProducts()
    {
        return service.getAllProducts();
    }

    @GetMapping("/product/{id}")
    public ProductModel getProductById(@PathVariable int id)
    {
        return service.getProductById(id);
    }
}
