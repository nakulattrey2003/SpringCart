package com.nakulattreydev.SpringCart.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nakulattreydev.SpringCart.model.ProductModel;

@Repository
public interface ProductRepo extends JpaRepository<ProductModel, Integer>
{
    
}
