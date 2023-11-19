package com.codeboard.jwt.savings;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface SavingsRepository extends JpaRepository<Savings, Long> {

	List<Savings> findAll();
}
