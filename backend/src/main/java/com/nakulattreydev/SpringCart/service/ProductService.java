package com.nakulattreydev.SpringCart.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.nakulattreydev.SpringCart.model.ProductModel;
import com.nakulattreydev.SpringCart.repository.ProductRepo;

@Service
public class ProductService 
{
    @Autowired
    private ProductRepo repo;
    public List<ProductModel> getAllProducts() 
    {
        // List<ProductModel> products = repo.findAll();
        // System.out.println(products);
        return repo.findAll();
    }

    public ProductModel getProductById(int id) 
    {
        return repo.findById(id).orElse(null);
    }

     public ProductModel addProduct(ProductModel productModel, MultipartFile imageFile) throws IOException
     {
         productModel.setImageName(imageFile.getOriginalFilename());
         productModel.setImageType(imageFile.getContentType());
         productModel.setImageData(imageFile.getBytes());

         return repo.save(productModel);
     }
}
