package com.Project20222023.vehiclerental.service;

import com.Project20222023.vehiclerental.model.Vehicle;
import com.Project20222023.vehiclerental.repository.VehicleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;


@Service
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;
    @Override
    public ResponseEntity<Vehicle> saveVehicle(Vehicle vehicle){
        if(vehicleRepository.findByVin(vehicle.getVin())!=null)
        {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(vehicleRepository.save(vehicle));
    }

    @Override
    public ResponseEntity<List<Vehicle>> getVehicles() {
        return ResponseEntity.ok(vehicleRepository.findAll());
    }

    public void deleteVehicle(String vin){
        vehicleRepository.deleteById(vehicleRepository.findByVin(vin).getId());
    }

    public void rentVehicle(String vin, String renter){
        Vehicle vehicle = vehicleRepository.findByVin(vin);

        if (vehicle == null) return;

        vehicle.setRenter(renter);
        vehicle.setIs_rented(true);

        vehicleRepository.save(vehicle);
    }

    public void cancelRent(String vin){
        Vehicle vehicle = vehicleRepository.findByVin(vin);

        if (vehicle == null) return;

        vehicle.setRenter(null);
        vehicle.setIs_rented(false);

        vehicleRepository.save(vehicle);
    }
}
