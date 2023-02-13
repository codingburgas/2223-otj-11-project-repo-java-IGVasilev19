package com.Project20222023.vehiclerental.service;

import com.Project20222023.vehiclerental.model.User;
import com.Project20222023.vehiclerental.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Override
    public ResponseEntity<User> saveUser(User user) {
        if(userRepository.findByEmailOrUsername(user.getEmail(), user.getUsername())!=null)
        {
           return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return ResponseEntity.ok(userRepository.save(user));
    }

    @Override
    public List<User> getAllUsers() {

        return userRepository.findAll();
    }

    @Override
    public ResponseEntity<User> findByUsernameAndPassword(String username, String password) {
        if (userRepository.findByUsernameAndPassword(username, password) == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(userRepository.findByUsernameAndPassword(username, password));
    }

    @Override
    public ResponseEntity<User> findByEmailAndPassword(String email, String password) {
        if (userRepository.findByEmailAndPassword(email, password) == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }

        return ResponseEntity.ok(userRepository.findByEmailAndPassword(email, password));
    }

}