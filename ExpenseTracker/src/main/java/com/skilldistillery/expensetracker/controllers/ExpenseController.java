package com.skilldistillery.expensetracker.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.expensetracker.entities.Expense;
import com.skilldistillery.expensetracker.services.ExpenseService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4204" })
public class ExpenseController {

	@Autowired
	private ExpenseService svc;

	@GetMapping("expenses")
	@ResponseBody
	public List<Expense> index() {
		return svc.allExpenses();
	}

	@GetMapping("expenses/{id}")
	@ResponseBody
	public Expense findExpenseById(@PathVariable int id, HttpServletResponse resp) {
		Expense exp = svc.findExpenseById(id);
		if (exp == null) {
			resp.setStatus(404);
		}
		return exp;
	}

	@PostMapping("expenses")
	@ResponseBody
	public Expense createExpense(@RequestBody Expense expense, HttpServletResponse resp) {
		try {
			svc.createExpense(expense);
			resp.setStatus(201);
			return expense;
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(400);
			return null;
		}
	}

	@PostMapping("expenses/{id}")
	@ResponseBody
	public Expense updateExpense(@PathVariable int id, @RequestBody Expense expense, HttpServletResponse resp) {
		try {
			expense = svc.updateExpense(id, expense);
			resp.setStatus(201);
		} catch (Exception e) {
			e.printStackTrace();
			resp.setStatus(404);
			return null;
		}
		return expense;
	}
	
	@DeleteMapping("expenses/{id}")
	@ResponseBody
	public void deleteExpense(@PathVariable int id, HttpServletResponse resp) {
		try {
			if (svc.deleteExpense(id)) {
				resp.setStatus(204);
			} else {
				resp.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
