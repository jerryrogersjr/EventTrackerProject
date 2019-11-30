package com.skilldistillery.expensetracker.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.expensetracker.entities.Expense;
import com.skilldistillery.expensetracker.services.ExpenseService;

@RestController
@RequestMapping("api")
public class ExpenseController {
	
	@Autowired
	private ExpenseService svc;
	
	@GetMapping("expenses")
	@ResponseBody
	public List<Expense> index(){
		return svc.allExpenses();
	}
	
	

}
