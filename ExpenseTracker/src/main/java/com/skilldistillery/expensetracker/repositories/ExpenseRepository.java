package com.skilldistillery.expensetracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.expensetracker.entities.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Integer> {

}
