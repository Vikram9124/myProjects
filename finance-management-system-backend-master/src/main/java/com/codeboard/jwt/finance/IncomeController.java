package com.codeboard.jwt.finance;

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
import com.codeboard.jwt.investments.Investment;
import com.codeboard.jwt.service.Springbootmailservice;
import com.codeboard.jwt.service.UserService;

@RestController
@RequestMapping("/income")
public class IncomeController {
	@Autowired
    private final IncomeRepository incomeRepository;

	@Autowired
	private UserService userSer;
    
    public IncomeController(IncomeRepository incomeRepository) {
        this.incomeRepository = incomeRepository;
    }

    @PostMapping("/postincome")
    public Income createIncome(@RequestBody Income income) {
    	
    	Income inco=userSer.addIncome(income);
        
         
        return inco;
    }
    @GetMapping("getincomebyid/{id}")
    public ResponseEntity<Income> getIncomeById(@PathVariable Long id) {
        Optional<Income> income = incomeRepository.findById(id);
        if (income.isPresent()) {
            return new ResponseEntity<>(income.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/getincome")
    public List<Income> getAllIncome() {
    	
        return incomeRepository.findAll();
    }
  //Updating the income
    @PutMapping("/updateincome/{id}")
    public ResponseEntity<Income> updateIncome(@PathVariable Long id, @RequestBody Income incomeDetails )
    {
//    	Springbootmailservice mail=new Springbootmailservice(); 
//    	mail.sendEmail("vikram238292@gmail.com", "vikram238292@gmail.com", "STS mail","sending sample mail for testing purpose!");
		Income income=incomeRepository.findById(id)
		.orElseThrow(()->new ResourceNotFoundException("Income data not exist with id :"+id)); 
		income.setName(incomeDetails.getName()); 
		income.setAmount(incomeDetails.getAmount()); 
		income.setDate(incomeDetails.getDate()); 
		Income UpdateIncome=incomeRepository.save(income);
		return ResponseEntity.ok(UpdateIncome); 
    	 
    }
    //Deleting the income REST API
    @DeleteMapping("/delete")
    public ResponseEntity<Void> deleteIncome(@PathVariable Long id) {
        incomeRepository.deleteById(id);
        
        return ResponseEntity.noContent().build();
    }
    
    //Deleting the income data by ID
    @DeleteMapping("/deleteincomebyid/{id}")
    public ResponseEntity<Map<String , Boolean>>deleteEmployee(@PathVariable Long  id)
    {
    	Income income=incomeRepository.findById(id)
    	.orElseThrow(()->new ResourceNotFoundException("Income data not exist with id :"+id)); 
    	incomeRepository.delete(income); 
    	Map<String , Boolean>response=new HashMap<>(); 
    	response.put("deleted", Boolean.TRUE); 
		return ResponseEntity.ok(response); 
    	
    }
    
    
    
    
}
