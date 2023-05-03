package com.Project20222023.vehiclerental.service;

import com.Project20222023.vehiclerental.model.Vehicle;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface VehicleService {
    public ResponseEntity<Vehicle> saveVehicle(Vehicle vehicle);

    public ResponseEntity<List<Vehicle>> getVehicles();
}
