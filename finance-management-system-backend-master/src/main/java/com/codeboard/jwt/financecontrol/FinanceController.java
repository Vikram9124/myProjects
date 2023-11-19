package com.codeboard.jwt.financecontrol;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class FinanceController {
    private double totalSavings = 0; // Initialize this from your database or any other source

    @GetMapping("/total-savings")
    public double getTotalSavings() {
        return totalSavings;
    }

    @PostMapping("/add-income")
    public void addIncome(@RequestBody double incomeAmount) {
        totalSavings += incomeAmount;
       
    }

    @PostMapping("/add-expense")
    public void addExpense(@RequestBody double expenseAmount) {
        totalSavings -= expenseAmount;
     
    }
}
