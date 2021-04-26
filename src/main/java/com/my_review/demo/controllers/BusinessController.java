package com.my_review.demo.controllers;

import com.my_review.demo.models.Business;
import com.my_review.demo.services.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
public class BusinessController {
    @Autowired
    BusinessService businessService;

    @PostMapping("/api/owners/{ownerId}/businesses")
    public Business createBusiness(
            @PathVariable("ownerId") Integer ownerId,
            @RequestBody Business newBusiness) {
        newBusiness.setOwnerId(ownerId);
        return businessService.createBusiness(newBusiness);
    }

    @GetMapping("/api/owners/{ownerId}/businesses")
    public List<Business> findBusinessesForOwner(
            @PathVariable("ownerId") Integer ownerId) {
        return businessService.findBusinessesForOwner(ownerId);
    }

    @GetMapping("/api/businesses")
    public List<Business> findBusinesses() {
        return businessService.findAllBusinesses();
    }

    @PutMapping("/api/businesses/{businessId}")
    public int updateBusiness(
            @PathVariable("businessId") int bid, @RequestBody Business business) {
        return businessService.updateBusiness(bid, business);
    }

    @DeleteMapping("/api/businesses/{businessId}")
    public int deleteBusiness(@PathVariable("businessId") int bid) {
        return businessService.deleteBusiness(bid);
    }
}
