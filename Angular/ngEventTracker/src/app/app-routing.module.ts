import { NewExpenseComponent } from './components/new-expense/new-expense.component';
import { ExpenseListComponent } from './components/expense-list/expense-list.component';
// import { ExpenseComponent } from './components/expense/expense.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'expense', component: ExpenseComponent }, // Currently unused path
  { path: 'expenses', component: ExpenseListComponent },
  { path: 'create-expense', component: NewExpenseComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
