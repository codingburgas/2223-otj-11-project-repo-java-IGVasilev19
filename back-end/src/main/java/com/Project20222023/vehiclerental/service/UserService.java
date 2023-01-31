package com.Project20222023.vehiclerental.service;

import com.Project20222023.vehiclerental.model.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
}
