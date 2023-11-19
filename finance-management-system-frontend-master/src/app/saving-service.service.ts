import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SavingsService {
  private apiUrl = 'http://localhost:8080/savings/getsavings';

  constructor(private http: HttpClient) {}

  getTotalSavings() {
    return this.http.get<number>(this.apiUrl);
  }
}
