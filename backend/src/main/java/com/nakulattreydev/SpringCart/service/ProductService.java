package com.nakulattreydev.SpringCart.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nakulattreydev.SpringCart.model.ProductModel;
import com.nakulattreydev.SpringCart.repository.ProductRepo;

@Service
public class ProductService 
{
    @Autowired
    private ProductRepo repo;
    public List<ProductModel> getAllProducts() 
    {
        List<ProductModel> products = repo.findAll();
        System.out.println(products);
        return repo.findAll();
    }

}
