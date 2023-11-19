package com.codeboard.jwt.dao;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codeboard.jwt.entity.User;

@Repository
public interface UserDao extends CrudRepository<User, Long> {

	Optional<User> findByUserName(String userName);
}
