package com.codeboard.jwt.investments;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
	public class InvestmentService {

	    @Autowired
	    private InvestmentRepository investmentRepository;

	    public Investment addInvestment(Investment investment) {
	        return investmentRepository.save(investment);
	    }

	    public List<Investment> getAllInvestments() {
	        return investmentRepository.findAll();
	    }

	    public void deleteInvestment(Long id) {
	        investmentRepository.deleteById(id);
	    }
	}



