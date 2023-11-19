package com.codeboard.jwt.investments;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
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
import com.codeboard.jwt.service.Springbootmailservice;

@RestController
	@RequestMapping("/investments")
	public class InvestmentController {

	    @Autowired
	    private InvestmentRepository investmentRepository;

	    @PostMapping("/addinvestment")
	    public Investment addInvestment(@RequestBody Investment investment) {
	    	
	        return investmentRepository.save(investment);
	    }
        //Updating the investment
	    @PutMapping("/updateinvestment/{id}")
	    public ResponseEntity<Investment> updateInvestment(@PathVariable Long id, @RequestBody Investment investDetails )
	    {
			Investment invest=investmentRepository.findById(id)
			.orElseThrow(()->new ResourceNotFoundException("investment data not exist with id :"+id)); 
			
			invest.setName(investDetails.getName()); 
			invest.setAmount(investDetails.getAmount()); 
			Investment UpdateInvestment=investmentRepository.save(invest);
			return ResponseEntity.ok(UpdateInvestment); 
	    	 
	    }
	    
	    @GetMapping("/getinvestment")
	    public List<Investment> getAllInvestments() {
	        return investmentRepository.findAll();
	    }

	    @GetMapping("getinvestbyid/{id}")
	    public ResponseEntity<Investment> getInvestmentById(@PathVariable Long id) {
	        Optional<Investment> investment = investmentRepository.findById(id);
	        if (investment.isPresent()) {
	            return new ResponseEntity<>(investment.get(), HttpStatus.OK);
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	        }
	    }
	    
	    @DeleteMapping("/deleteinvestmentbyid/{id}")
	    public ResponseEntity<Void> deleteInvestment(@PathVariable Long id) {
	        Optional<Investment> investment = investmentRepository.findById(id);
	        if (investment.isPresent()) {
	            investmentRepository.deleteById(id);
	            
	            return new ResponseEntity<>(HttpStatus.NO_CONTENT); // Successful deletion
	            
	        } else {
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Investment not found
	        }
	    }
	}


