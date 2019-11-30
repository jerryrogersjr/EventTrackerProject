package com.skilldistillery.expensetracker.services;

import java.util.List;
import java.util.Optional;

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
		return repo.findAll();
	}

	@Override
	public Expense findExpenseById(int id) {
		Expense exp = null;
		Optional<Expense> opt = repo.findById(id);
		if (opt.isPresent()) {
			exp = opt.get();
		}
		return exp;
	}

	@Override
	public Expense createExpense(Expense expense) {
		return repo.saveAndFlush(expense);
	}

	@Override
	public Expense updateExpense(int expId, Expense updatedExpense) {
		Expense exp = null;
		Optional<Expense> opt = repo.findById(expId);
		if (opt.isPresent()) {
			exp = opt.get();
			exp.setExpenseDate(updatedExpense.getExpenseDate());
			exp.setPaidToName(updatedExpense.getPaidToName());
			exp.setExpenseType(updatedExpense.getExpenseType());
			exp.setPaymentType(updatedExpense.getPaymentType());
			exp.setWorkorderNumber(updatedExpense.getWorkorderNumber());
			exp.setDescription(updatedExpense.getDescription());
			exp.setExpenseTotal(updatedExpense.getExpenseTotal());
			repo.saveAndFlush(exp);
		}
		return exp;
	}

	@Override
	public boolean deleteExpense(int id) {
		boolean deleted = false;
		if (repo.existsById(id)) {
			repo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

}
