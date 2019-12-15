import { Expense } from './../models/expense';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ExpenseService {
  private baseUrl = 'http://localhost:8087/';
  private url = this.baseUrl + 'api/expenses';

  constructor(private http: HttpClient, private router: Router) {}

  // Display List of Expenses *****************************
  public index() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Expense[]>(this.baseUrl, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Index Method');
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

    return this.http.get<Expense>(this.baseUrl + '/' + id, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: FindById Method');
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

    return this.http.post<Expense>(this.baseUrl, newExpense, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Create New Expense Method');
      })
    );
  }

  // Update Expense *****************************
  public updateExpense(id: number, updateExpense: Expense) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Authorization: "Basic " + this.authsvc.getCredentials()
      })
    };

    return this.http
      .put<Event>(this.baseUrl + '/' + id, updateExpense, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Service Error: Create Method');
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

    return this.http.delete<any>(this.baseUrl + '/' + id, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('Service Error: Delete Expense Method');
      })
    );
  }
}
