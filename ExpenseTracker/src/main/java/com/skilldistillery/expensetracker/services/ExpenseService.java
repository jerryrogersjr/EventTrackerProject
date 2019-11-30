package com.skilldistillery.expensetracker.services;

import java.util.List;

import com.skilldistillery.expensetracker.entities.Expense;

public interface ExpenseService {
	
	List<Expense> allExpenses();
	
	Expense findExpenseById(int id);
	
	Expense createExpense(Expense expense);
	
	Expense updateExpense(int id, Expense expense);
	
	boolean deleteExpense(int id);

}
