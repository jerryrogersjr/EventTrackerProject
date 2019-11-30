package com.skilldistillery.expensetracker.repository;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.skilldistillery.expensetracker.entities.Expense;
import com.skilldistillery.expensetracker.repositories.ExpenseRepository;

@RunWith(SpringRunner.class)
@SpringBootTest
class ExpenseRepositoryTest {

	@Autowired
	private ExpenseRepository repo;

	@Test
	void test() {
		Optional<Expense> opt = repo.findById(1);
		assertTrue(opt.isPresent());

		if (opt.isPresent()) {
			Expense exp = opt.get();
			assertEquals("Batteries for lights", exp.getDescription());
		}
	}
	
	@Test
	void test2() {
		List<Expense> exp = repo.findAll();
		assertNotNull(exp);
		assertTrue(exp.size() > 0);
	}

}
