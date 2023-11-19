import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { LogoutComponent } from './logout/logout.component';
import { IncomeListComponent } from './income-list/income-list.component';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { ExpenseDataComponent } from './expense-data/expense-data.component';
import { IncomeDataComponent } from './income-data/income-data.component';
import { InvestmentsComponent } from './investments/investments.component';
import { SavingsComponent } from './savings/savings.component';
import { UpdateInvestmentComponent } from './update-investment/update-investment.component';
import { UpdateIncomeComponent } from './update-income/update-income.component';
import { UpdateExpenseComponent } from './update-expense/update-expense.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'showincome',
    component: IncomeListComponent,
  },
  {
    path: 'showexpense',
    component: ExpenseListComponent,
  },
  {
    path: 'expensedata',
    component: ExpenseDataComponent,
  },
  {
    path: 'incomedata',
    component: IncomeDataComponent,
  },
  {
    path: 'investment',
    component: InvestmentsComponent,
  },
  {
    path: 'savingsdata',
    component: SavingsComponent,
  },
  {
    path: 'updateinvestment/:id',
    component: UpdateInvestmentComponent,
  },
  {
    path: 'UpdateIncomeComponent/:id',
    component: UpdateIncomeComponent,
  },
  {
    path: 'UpdateExpenseComponent/:id',
    component: UpdateExpenseComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
