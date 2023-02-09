package com.Project20222023.vehiclerental.service;

import com.Project20222023.vehiclerental.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public ResponseEntity<User> findByUsernameAndPassword(String username, String password);
    public ResponseEntity<User> findByEmailAndPassword(String email, String password);
}
