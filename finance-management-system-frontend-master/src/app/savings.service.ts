import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SavingsService {
  private apiURL = 'http://localhost:8080/savings/getsavings';

  constructor(private http: HttpClient) {}

  getSavingsAmount() {
    return this.http.get<number>(this.apiURL);
  }
}
