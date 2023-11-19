package com.codeboard.jwt.expense;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codeboard.jwt.savings.SavingsService;

@Service
public class ExpenseService {
    @Autowired
    private ExpenseRepository expenseRepository;
    
    @Autowired
    private SavingsService totalSavingsService;

    public void addExpense(Expense expense) {
        Expense savedExpense = expenseRepository.save(expense);
        totalSavingsService.subtractFromTotalSavings(expense.getAmount());
//        return savedExpense;
    }
    
 }
