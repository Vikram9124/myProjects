package com.codeboard.jwt.savings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codeboard.jwt.service.Springbootmailservice;

@RestController
@RequestMapping("/savings")
public class SavingsController {
    @Autowired
    private SavingsService savingsService;

    @GetMapping("/getsavings")
    public ResponseEntity<Double> getTotalSavings() {
        double totalSavings = savingsService.getTotalSavings();
        return ResponseEntity.ok(totalSavings);
    }
    
    
//    @PutMapping("/incomesSave")
//    public ResponseEntity<String> updateIncome(@RequestParam double incomeAmount) {
//    	savingsService.updateTotalSavingsWithIncome(incomeAmount);
//        return new ResponseEntity<>("Income updated successfully", HttpStatus.OK);
//    }
//
//    @PutMapping("/expensesSave")
//    public ResponseEntity<String> updateExpense(@RequestParam double expenseAmount) {
//    	savingsService.updateTotalSavingsWithExpense(expenseAmount);
//        return new ResponseEntity<>("Expense updated successfully", HttpStatus.OK);
//    }
}