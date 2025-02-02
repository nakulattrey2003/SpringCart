package com.nakulattreydev.SpringCart.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nakulattreydev.SpringCart.model.ProductModel;
import com.nakulattreydev.SpringCart.service.ProductService;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;


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
    public ResponseEntity<List<ProductModel>> getAllProducts()
    {
        return new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK);
    }

    @GetMapping("/product/{id}")
    public ResponseEntity<ProductModel> getProductById(@PathVariable int id)
    {
        ProductModel productModel = service.getProductById(id);

        if(productModel == null) return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        else return new ResponseEntity<>(productModel, HttpStatus.OK);
    }

    @PostMapping("/addProduct")
    public ResponseEntity<?> addProduct(ProductModel product, MultipartFile imageFile)
    {
        try 
        {
            ProductModel product1 = service.addProduct(product, imageFile);
            return new ResponseEntity<>(product1, HttpStatus.CREATED);
        }
        catch (Exception e) 
        {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

   @GetMapping("/product/image/{id}")
   public ResponseEntity<byte[]> getImageByProductId(@PathVariable int id)
   {
       ProductModel productModel = service.getProductById(id);
       byte[] imageFile = productModel.getImageData();

       return ResponseEntity.ok()
           .contentType(MediaType.valueOf(productModel.getImageType()))
           .body(imageFile);
   }

   @PutMapping("/updateProduct/{id}")
   public ResponseEntity<?> updateProduct(@PathVariable int id, ProductModel product, MultipartFile imageFile)
   {
       try 
       {
           ProductModel product1 = service.updateProduct(id, product, imageFile);
           return new ResponseEntity<>(product1, HttpStatus.OK);
       } 
       catch (Exception e) 
       {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }

   @DeleteMapping("/deleteProduct/{id}")
   public ResponseEntity<?> deleteProduct(@PathVariable int id)
   {
       try 
       {
           service.deleteProduct(id);
           return new ResponseEntity<>("Deleted", HttpStatus.OK);
       } 
       catch (Exception e) 
       {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
       }
   }
}
