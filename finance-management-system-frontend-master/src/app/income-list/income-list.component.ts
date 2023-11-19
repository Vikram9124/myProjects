import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentService } from '../investment.service';
import { IncomeDataComponent } from '../income-data/income-data.component';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css'],
})
export class IncomeListComponent implements OnInit {
  incomeData: any[] = []; // Define the income data array
  constructor(
    private http: HttpClient,
    private router: Router,
    private income: InvestmentService
  ) {}

  ngOnInit() {
    this.http
      .get('http://localhost:8080/income/getincome')
      .subscribe((data: any) => {
        this.incomeData = data;
      });
  }
  updateIncome(id: number) {
    this.router.navigate(['/UpdateIncomeComponent', id]);
  }
  deleteIncome(id: number) {
    this.income.deleteIncome(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit();
    });
  }
}
