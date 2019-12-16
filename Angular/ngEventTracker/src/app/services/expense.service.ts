import { environment } from './../../environments/environment';
import { Expense } from './../models/expense';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {

  expenses: Expense[] = [];
  newExpense = new Expense();
  // private url = 'http://localhost:8087/api/expenses';   // Local Testing

  private baseUrl = '/ExpenseTracker/';                    // Production
  private url = environment.baseUrl + 'api/expenses';

  constructor(private http: HttpClient, private datePipe: DatePipe) {}

  // Display List of Expenses *****************************
  public index() {

    const httpOptions = {
      headers: new HttpHeaders({
        // 'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Expense[]>(this.url, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service: Index Method');
      })
    );
  }

  // Find Expense By Id *****************************
  public findById(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<Expense>(this.url + '/' + id, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service: FindById Method');
      })
    );
  }

  // Create New Expense *****************************
  public createExpense(newExpense: Expense) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<Expense>(this.url, newExpense, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service: Create New Expense Method');
      })
    );
  }

  // Update Expense *****************************
  public updateExpense(expense: Expense) {
    console.log(expense);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      // .put<Expense>(`${this.url}/${expense.id}`, expense, httpOptions)
      .post(this.url + '/' + expense.id, expense, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Service: Update Method');
        })
      );
  }

  // Delete Expense *****************************
  public deleteExpense(id: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.delete<any>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service: Delete Expense Method');
      })
    );
  }
}
