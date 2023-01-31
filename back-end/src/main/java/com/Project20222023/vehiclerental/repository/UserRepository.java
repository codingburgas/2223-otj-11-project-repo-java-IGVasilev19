package com.Project20222023.vehiclerental.repository;

import com.Project20222023.vehiclerental.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
}
