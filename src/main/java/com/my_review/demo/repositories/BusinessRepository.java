package com.my_review.demo.repositories;

import com.my_review.demo.models.Business;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BusinessRepository extends CrudRepository<Business, Integer> {
    @Query("SELECT business FROM Business business WHERE business.ownerId=:ownerId")
    public List<Business> findBusinessesForOwner(
            @Param("ownerId") int ownerId
    );

    @Query("SELECT business FROM Business business WHERE business.id=:businessId")
    public Business findBusinessById(
            @Param("businessId") int bid
    );
}