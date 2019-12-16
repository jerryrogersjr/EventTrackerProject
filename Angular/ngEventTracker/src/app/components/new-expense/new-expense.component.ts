import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Expense } from './../../models/expense';
import { ExpenseService } from './../../services/expense.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.component.html',
  styleUrls: ['./new-expense.component.css']
})
export class NewExpenseComponent implements OnInit {
  newExpense: Expense = new Expense();
  expenses: Expense[] = [];
  selected = null;

  constructor(private expenseSvc: ExpenseService, private router: Router) {}

  ngOnInit() {}

  public createExpense(newExpense: NgModel) {
    console.log(newExpense);
    this.expenseSvc.createExpense(this.newExpense).subscribe(
      data => {
        this.selected = data;
        this.router.navigateByUrl('expenses');

      },
      err => {
        return console.error('Error: create method in NewExpenseComponent');
      }
    );
    this.newExpense = null;
  }
}
