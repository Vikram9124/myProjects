package com.codeboard.jwt.savings;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SavingsService {
    @Autowired
    private SavingsRepository savingsRepository;

    public double getTotalSavings() {
        List<Savings> savingsList = savingsRepository.findAll();
        return savingsList.stream()
                .mapToDouble(Savings::getAmount)
                .sum();
    }
    public void addToTotalSavings(double amount) {
        Savings totalSavings = savingsRepository.findById(1L).orElse(new Savings());
        totalSavings.setAmount(totalSavings.getAmount() + amount);
        savingsRepository.save(totalSavings);
    }
    
    public void subtractFromTotalSavings(double amount) {
        Savings totalSavings = savingsRepository.findById(1L).orElse(new Savings());
        totalSavings.setAmount(totalSavings.getAmount() - amount);
        savingsRepository.save(totalSavings);
    }
    
}
