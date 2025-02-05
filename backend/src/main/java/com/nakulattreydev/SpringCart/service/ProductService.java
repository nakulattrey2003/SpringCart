package com.nakulattreydev.SpringCart.service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
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

    public ProductModel updateProduct(@PathVariable int id, ProductModel productModel, MultipartFile imageFile) throws IOException 
    {
        // Fetch the existing product by ID
        ProductModel existingProduct = repo.findById(id)
                                        .orElseThrow(() -> new RuntimeException("Product not found"));

        // Update only non-null fields
        if (productModel.getName() != null) existingProduct.setName(productModel.getName());
        if (productModel.getDescription() != null) existingProduct.setDescription(productModel.getDescription());
        if (productModel.getPrice() != 0.0) existingProduct.setPrice(productModel.getPrice());
        if (productModel.getBrand() != null) existingProduct.setBrand(productModel.getBrand());
        if (productModel.getReleaseDate() != null) existingProduct.setReleaseDate(productModel.getReleaseDate());
        if (productModel.getQuantity() != 0) existingProduct.setQuantity(productModel.getQuantity());
        if (productModel.getCategory() != null) existingProduct.setCategory(productModel.getCategory());

        // Update image only if a new image is provided
        if (imageFile != null && !imageFile.isEmpty()) {
            existingProduct.setImageName(imageFile.getOriginalFilename());
            existingProduct.setImageType(imageFile.getContentType());
            existingProduct.setImageData(imageFile.getBytes());
        }

        return repo.save(existingProduct);
    }


    public void deleteProduct(int id) 
    {
        repo.deleteById(id);
    }

    public List<ProductModel> searchProducts(String keyword) 
    {
        return repo.searchProducts(keyword);
    }
}
