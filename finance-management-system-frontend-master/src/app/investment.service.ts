import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { investmentsVo } from './investments/investments.component';
import { Observable } from 'rxjs';
import { IncomeData } from './income-data/income-data.component';
import { ExpenseData } from './expense-data/expense-data.component';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  private baseURL = 'http://localhost:8080/investments/getinvestbyid';
  private baseURL1 = 'http://localhost:8080/investments/updateinvestment';
  private baseURLIncome = 'http://localhost:8080/income/getincomebyid';
  private baseURLupdateincome = 'http://localhost:8080/income/updateincome';
  private baseURLupdateexpense = 'http://localhost:8080/expense/updateExpense';
  private baseURLExpense = 'http://localhost:8080/expense/getexpensebyid';
  private delURLIncome = 'http://localhost:8080/income/deleteincomebyid';
  private delURLExpense = 'http://localhost:8080/expense/deleteexpensebyid';
  private delURLInvestment =
    'http://localhost:8080/investments/deleteinvestmentbyid';

  constructor(private httpClient: HttpClient) {}
  getInvestmentById(id: any): Observable<investmentsVo> {
    return this.httpClient.get<investmentsVo>(`${this.baseURL}/${id}`);
  }
  updateInvestment(id: number, investment: investmentsVo): Observable<Object> {
    return this.httpClient.put(`${this.baseURL1}/${id}`, investment);
  }
  getIncomeById(id: number) {
    return this.httpClient.get<IncomeData>(`${this.baseURLIncome}/${id}`);
  }
  updateIncome(id: number, income: IncomeData): Observable<Object> {
    return this.httpClient.put(`${this.baseURLupdateincome}/${id}`, income);
  }
  deleteIncome(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delURLIncome}/${id}`);
  }

  getExpenseById(id: number) {
    return this.httpClient.get<ExpenseData>(`${this.baseURLExpense}/${id}`);
  }
  updateExpense(id: number, expense: ExpenseData): Observable<Object> {
    return this.httpClient.put(`${this.baseURLupdateexpense}/${id}`, expense);
  }

  deleteExpense(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delURLExpense}/${id}`);
  }
  deleteInvestment(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delURLInvestment}/${id}`);
  }
}
