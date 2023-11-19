package com.codeboard.jwt.expense;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.codeboard.jwt.exceptions.ResourceNotFoundException;
import com.codeboard.jwt.finance.Income;
import com.codeboard.jwt.investments.Investment;
import com.codeboard.jwt.service.UserService;

@RestController
@RequestMapping("/expense")
public class ExpenseController {
	@Autowired
    private final ExpenseRepository expenseRepository;

	@Autowired
	private UserService userSer;
    
    public ExpenseController(ExpenseRepository expenseRepository) {
           this.expenseRepository=expenseRepository; 
    }

    @PostMapping("/postexpense")
    public Expense createIncome(@RequestBody Expense expense) {
    	Expense inco=userSer.addExpense(expense);
    	
        return inco;
    }

    @GetMapping("/getexpense")
    public List<Expense> getAllIncome() {
        return expenseRepository.findAll();
    }
    @GetMapping("getexpensebyid/{id}")
    public ResponseEntity<Expense> getExpenseById(@PathVariable Long id) {
        Optional<Expense> expense = expenseRepository.findById(id);
        if (expense.isPresent()) {
            return new ResponseEntity<>(expense.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteIncome(@PathVariable Long id) {
        expenseRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
  //Updating the expense
    @PutMapping("/updateExpense/{id}")
    public ResponseEntity<Expense> updateInvestment(@PathVariable Long id, @RequestBody Expense expenseDetails )
    {
		Expense expense=expenseRepository.findById(id)
		.orElseThrow(()->new ResourceNotFoundException("investment data not exist with id :"+id)); 
		expense.setName(expenseDetails.getName()); 
		expense.setAmount(expenseDetails.getAmount()); 
		expense.setDate(expenseDetails.getDate()); 
		Expense UpdateExpense=expenseRepository.save(expense);
		return ResponseEntity.ok(UpdateExpense); 
    	 
    }
  //Deleting the expense data by ID
    @DeleteMapping("/deleteexpensebyid/{id}")
    public ResponseEntity<Map<String , Boolean>>deleteEmployee(@PathVariable Long  id)
    {
    	Expense expense=expenseRepository.findById(id)
    	.orElseThrow(()->new ResourceNotFoundException("Expense data not exist with id :"+id)); 
    	expenseRepository.delete(expense); 
    	Map<String , Boolean>response=new HashMap<>(); 
    	response.put("deleted", Boolean.TRUE); 
		return ResponseEntity.ok(response); 
    	
    }
}
