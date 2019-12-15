import { ExpenseService } from './services/expense.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { AboutComponent } from './components/about/about.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ExpenseComponent,
    NewExpenseComponent,
    AboutComponent,
    ExpenseListComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    // NgbModule
  ],
  providers: [ExpenseService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
