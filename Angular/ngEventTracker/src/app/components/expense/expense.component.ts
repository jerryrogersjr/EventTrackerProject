import { Expense } from './../../models/expense';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // displayExpense(selectedExpense: Expense) {
  //   return this;
  // }

}
