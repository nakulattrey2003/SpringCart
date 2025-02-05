package com.nakulattreydev.SpringCart.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.nakulattreydev.SpringCart.model.ProductModel;

@Repository
public interface ProductRepo extends JpaRepository<ProductModel, Integer>
{
    // in query we are writing JPQL and not SQL
    @Query("SELECT p FROM ProductModel p WHERE "
            + " LOWER(p.name) LIKE LOWER(CONCAT('%', :keyword, '%')) OR "
            + " LOWER(p.description) LIKE LOWER(CONCAT('%', :keyword, '%')) OR "
            + " LOWER(p.brand) LIKE LOWER(CONCAT('%', :keyword, '%')) OR "
            + " LOWER(p.category) LIKE LOWER(CONCAT('%', :keyword, '%'))")

    List<ProductModel> searchProducts(String keyword);
}
