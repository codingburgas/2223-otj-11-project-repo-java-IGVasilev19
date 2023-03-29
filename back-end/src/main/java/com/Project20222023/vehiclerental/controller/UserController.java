package com.Project20222023.vehiclerental.controller;

import com.Project20222023.vehiclerental.model.User;
import com.Project20222023.vehiclerental.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
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
    public ResponseEntity<User> saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    @PostMapping("/getByUsername")
    public ResponseEntity<User> getByUsernameAndPassword(@RequestBody User user) {
        return userService.findByUsernameAndPassword(user.getUsername(), user.getPassword());
    }

    @PostMapping("/getByEmail")
    public ResponseEntity<User> findByEmailAndPassword(@RequestBody User user) {
        return userService.findByEmailAndPassword(user.getEmail(),user.getPassword());
    }

    @PostMapping("/setProfilePic")
    public ResponseEntity<User> saveProfilePic(@RequestBody User user){
        return userService.setProfilePic(user.getUsername(),user.getPassword(), user.getProfile_pic());
    }
}
