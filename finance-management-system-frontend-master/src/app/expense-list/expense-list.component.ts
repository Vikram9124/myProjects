import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-expense-list',
  templateUrl: './expense-list.component.html',
  styleUrls: ['./expense-list.component.css'],
})
export class ExpenseListComponent implements OnInit {
  expenseData: any[] = []; // Define the expense data array

  constructor(
    private http: HttpClient,
    private router: Router,
    private expense: InvestmentService
  ) {}

  ngOnInit() {
    this.http
      .get('http://localhost:8080/expense/getexpense')
      .subscribe((data: any) => {
        this.expenseData = data;
      });
  }
  updateExpense(id: number) {
    this.router.navigate(['/UpdateExpenseComponent', id]);
  }
  deleteExpense(id: number) {
    this.expense.deleteExpense(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
