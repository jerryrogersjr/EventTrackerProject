import { ExpenseService } from './../../services/expense.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css']
})
export class ExpenseListComponent implements OnInit {
  expenses: Expense[] = [];
  selectedExpense: Expense = null;
  expense: Expense = null;
  updateExpense: Expense = null;

  constructor(private datePipe: DatePipe, private expenseSvc: ExpenseService) {}

  public ngOnInit() {
    this.loadList();
  }

  public loadList() {
    this.expenseSvc.index().subscribe(
      data => {
        console.log(data);
        this.expenses = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  public setUpdateExpense() {
    this.updateExpense = Object.assign({}, this.selectedExpense);
  }

  public updatedExpense(expense: Expense) {
    console.log(expense);

    this.expenseSvc.updateExpense(expense).subscribe(
      uData => {
        this.loadList();
        this.updateExpense = null;
        this.selectedExpense = null;
      },
      uErr => {
        this.loadList();
        console.error('updatedExpense: Error');
        console.error(uErr);
      }
    );
  }

  public deleteExpense(id: number) {
    this.expenseSvc.deleteExpense(id).subscribe(
      good => {
        this.loadList();
        console.log('Successful Delete');
      },
      bad => {
        console.error('deleteTodo(): Error');
        console.error(bad);
      }
    );
  }

  public errorUpdateDisplay() {
    console.log('error updating');
  }

  public totalExpenses() {
    return this.expenses.length;
  }

  public expenseSum(expenses: Expense[]) {
    let sum = 0.0;
    let count = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < expenses.length; i++) {
      sum += expenses[i].expenseTotal;
      count++;
    }
    console.log(sum);

    return sum;
  }
}
