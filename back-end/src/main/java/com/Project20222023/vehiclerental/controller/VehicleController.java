package com.Project20222023.vehiclerental.controller;

import com.Project20222023.vehiclerental.model.User;
import com.Project20222023.vehiclerental.model.UserVehicle;
import com.Project20222023.vehiclerental.model.Vehicle;
import com.Project20222023.vehiclerental.service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/vehicle")
@CrossOrigin
public class VehicleController {
    @Autowired
    private VehicleService vehicleService;

    @PostMapping("/add")
    public ResponseEntity<Vehicle> saveVehicle(@RequestBody Vehicle vehicle) {return vehicleService.saveVehicle(vehicle);}

    @PostMapping("/get")
    public ResponseEntity<List<Vehicle>> getVehicles() { return vehicleService.getVehicles(); }

    @DeleteMapping("/delete")
    public void deleteVehicle(@RequestBody Vehicle vehicle){
        vehicleService.deleteVehicle(vehicle.getVin());
    }

    @PostMapping("/rent")
    public void rentVehicle(@RequestBody UserVehicle uservehicle){
        vehicleService.rentVehicle(uservehicle.getVin(), uservehicle.getUsername());
    }

    @PostMapping("/cancel")
    public void cancelRent(@RequestBody UserVehicle userVehicle){
        vehicleService.cancelRent(userVehicle.getVin());
    }
}
