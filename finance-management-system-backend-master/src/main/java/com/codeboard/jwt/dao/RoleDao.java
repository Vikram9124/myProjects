package com.codeboard.jwt.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codeboard.jwt.entity.Role;

@Repository
public interface RoleDao extends CrudRepository<Role, Long> {

}
