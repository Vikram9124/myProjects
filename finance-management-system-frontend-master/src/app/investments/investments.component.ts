import { Component, NgModule, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css'],
})
export class InvestmentsComponent implements OnInit {
  investments: any[] = [];
  newInvestment = new investmentsVo();

  constructor(
    private http: HttpClient,
    private router: Router,
    private investdelete: InvestmentService
  ) {}

  ngOnInit(): void {
    this.fetchInvestments();
  }
  updateInvestment(id: number) {
    this.router.navigate(['/updateinvestment', id]);
  }
  deleteInvestment(id: number) {
    this.investdelete.deleteInvestment(id).subscribe((data: any) => {
      console.log(data);
      this.ngOnInit();
    });
  }

  fetchInvestments() {
    this.http
      .get('http://localhost:8080/investments/getinvestment')
      .subscribe((data: any) => {
        this.investments = data;
      });
  }

  addInvestment() {
    console.log(this.newInvestment);
    this.http
      .post(
        'http://localhost:8080/investments/addinvestment',
        this.newInvestment
      )
      .subscribe((data) => {
        let name = data;
        this.fetchInvestments();
        // this.newInvestment = name;
      });
  }
  getInvestmentById(id: number) {}
}

export class investmentsVo {
  name!: string;
  amount!: number;
}
