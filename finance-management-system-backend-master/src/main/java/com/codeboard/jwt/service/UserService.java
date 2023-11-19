package com.codeboard.jwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.codeboard.jwt.dao.RoleDao;
import com.codeboard.jwt.dao.UserDao;
import com.codeboard.jwt.entity.Role;
import com.codeboard.jwt.entity.User;
import com.codeboard.jwt.expense.Expense;
import com.codeboard.jwt.expense.ExpenseRepository;
import com.codeboard.jwt.finance.Income;
import com.codeboard.jwt.finance.IncomeRepository;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private PasswordEncoder passwordEncoder;
    
    @Autowired
    private IncomeRepository incomeRepo;
    @Autowired
    private ExpenseRepository expenseRepo; 

//    public void initRoleAndUser() {
//
//        Role adminRole = new Role();
//        adminRole.setRoleName("Admin");
//        adminRole.setRoleDescription("Admin role");
//        roleDao.save(adminRole);
//
//        Role userRole = new Role();
//        userRole.setRoleName("User");
//        userRole.setRoleDescription("Default role for newly created record");
//        roleDao.save(userRole);
//
//        User adminUser = new User();
//        adminUser.setUserName("admin123");
//        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
//        adminUser.setUserFirstName("admin");
//        adminUser.setUserLastName("admin");
//        Set<Role> adminRoles = new HashSet<>();
//        adminRoles.add(adminRole);
//        adminUser.setRole(adminRoles);
//        userDao.save(adminUser);
//
////        User user = new User();
////        user.setUserName("raj123");
////        user.setUserPassword(getEncodedPassword("raj@123"));
////        user.setUserFirstName("raj");
////        user.setUserLastName("sharma");
////        Set<Role> userRoles = new HashSet<>();
////        userRoles.add(userRole);
////        user.setRole(userRoles);
////        userDao.save(user);
//    }

    public User registerNewUser(User user) {
        //Role role = roleDao.findByUserName("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.addAll(user.getRole());
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));
        return userDao.save(user);
    }
    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }
    
    public Income addIncome(Income income) {
    	
    	incomeRepo.save(income);
    	return incomeRepo.save(income);
    }
    
public  Expense addExpense(Expense expense) {
    	
    	expenseRepo.save(expense);
    	return expenseRepo.save(expense);
    }
    
   
    
}
