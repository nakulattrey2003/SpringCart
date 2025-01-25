package com.nakulattreydev.SpringCart.controller;

import org.springframework.web.bind.annotation.RestController;

import com.nakulattreydev.SpringCart.model.ProductModel;
import com.nakulattreydev.SpringCart.service.ProductService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@CrossOrigin
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
}
