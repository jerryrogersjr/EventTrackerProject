package com.skilldistillery.expensetracker.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.expensetracker.entities.Expense;
import com.skilldistillery.expensetracker.repositories.ExpenseRepository;

@Service
@Transactional
public class ExpenseServiceImpl implements ExpenseService {
	
	@Autowired
	private ExpenseRepository repo;

	@Override
	public List<Expense> allExpenses() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Expense findExpenseById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Expense createExpense(Expense expense) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Expense updateExpense(int id, Expense expense) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean deleteExpense(int id) {
		// TODO Auto-generated method stub
		return false;
	}

}
