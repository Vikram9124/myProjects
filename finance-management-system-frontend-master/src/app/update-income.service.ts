import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IncomeDataComponent } from './income-data/income-data.component';
import { IncomeData } from './income-data/income-data.component';
@Injectable({
  providedIn: 'root',
})
export class UpdateIncomeService {
  private baseURL = 'http://localhost:8080/income/getincomebyid';
  private baseURL1 = 'http://localhost:8080/income/updateincome';

  constructor(private httpClient: HttpClient) {}
  getIncomeById(id: any): Observable<IncomeData> {
    return this.httpClient.get<IncomeData>(`${this.baseURL}/${id}`);
  }
  updateInvestment(
    id: number,
    income: IncomeDataComponent
  ): Observable<Object> {
    return this.httpClient.put(`${this.baseURL1}/${id}`, income);
  }
}
function getInvestmentById(id: any, number: any) {
  throw new Error('Function not implemented.');
}
