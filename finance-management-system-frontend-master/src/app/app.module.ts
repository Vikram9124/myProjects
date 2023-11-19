import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { CategoriesComponent } from './categories/categories.component';
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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { YourComponent } from './your/your.component';
// import { IncomeUpdateComponent } from './income-update/income-update.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'navbar', component: NavbarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    LogoutComponent,
    CategoriesComponent,
    NavbarComponent,
    IncomeListComponent,
    ExpenseListComponent,
    ExpenseDataComponent,
    IncomeDataComponent,
    InvestmentsComponent,
    SavingsComponent,
    UpdateInvestmentComponent,
    UpdateIncomeComponent,
    UpdateExpenseComponent,
    ItemsComponent,
    // YourComponent,
    // IncomeUpdateComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule,ToastrModule.forRoot({timeOut: 2000,}) ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
