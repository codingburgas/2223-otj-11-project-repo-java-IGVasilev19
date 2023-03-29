package com.Project20222023.vehiclerental.service;

import com.Project20222023.vehiclerental.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserService {
    public ResponseEntity<User> saveUser(User user);
    public ResponseEntity<User> setProfilePic(String username,String password, String profile_pic);
    public ResponseEntity<User> findByUsernameAndPassword(String username, String password);
    public ResponseEntity<User> findByEmailAndPassword(String email, String password);
}
