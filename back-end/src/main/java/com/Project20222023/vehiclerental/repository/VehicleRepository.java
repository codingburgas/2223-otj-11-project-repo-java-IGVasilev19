package com.Project20222023.vehiclerental.repository;

import com.Project20222023.vehiclerental.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Integer> {
    Vehicle findByVin(String vin);
}
