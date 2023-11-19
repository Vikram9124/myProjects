package com.codeboard.jwt.finance;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeboard.jwt.savings.SavingsService;

@Service
public class IncomeService {
    @Autowired
    private IncomeRepository incomeRepository;
    
    @Autowired
    private SavingsService totalSavingsService;
    

    public void addIncome(Income income) {
        // Save income entry to the database
    	totalSavingsService.addToTotalSavings(income.getAmount());
        Income savedIncome = incomeRepository.save(income);
//        return savedIncome;
    }
    
}