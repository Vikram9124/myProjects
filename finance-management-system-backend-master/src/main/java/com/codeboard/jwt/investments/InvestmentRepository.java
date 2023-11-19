package com.codeboard.jwt.investments;

import org.springframework.data.jpa.repository.JpaRepository;

public interface InvestmentRepository extends JpaRepository<Investment, Long> {

	Investment save(Investment investment);

}
