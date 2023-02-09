package com.Project20222023.vehiclerental.controller;

import com.Project20222023.vehiclerental.model.User;
import com.Project20222023.vehiclerental.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New user added successfully!";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @PostMapping("/getByUsername")
    public ResponseEntity<User> getByUsernameAndPassword(@RequestBody User user) {
        return userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
    }

    @PostMapping("/getByEmail")
    public ResponseEntity<User> findByEmailAndPassword(@RequestBody User user) {
        return userService.findByEmailAndPassword(user.getEmail(),user.getPassword());
    }
}
