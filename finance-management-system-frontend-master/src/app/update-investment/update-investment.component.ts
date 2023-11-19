import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestmentService } from '../investment.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update-investment',
  templateUrl: './update-investment.component.html',
  styleUrls: ['./update-investment.component.css'],
})
export class UpdateInvestmentComponent implements OnInit {
  id!: number;
  investment: investmentsVo = new investmentsVo();
  constructor(
    private investmentService: InvestmentService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // for getting particular id from the table
    this.investmentService.getInvestmentById(this.id).subscribe(
      (data) => {
        this.investment = data;
      },
      (error) => console.log(error)
    );
  }

  displayUpdated() {
    this.investmentService.updateInvestment(this.id, this.investment).subscribe(
      (data: any) => {
        this.goToInvestmentlist();
      }
      // (error) => console.log(error)
    );
  }

  goToInvestmentlist() {
    this.router.navigate(['/investment']);
  }
}
export class investmentsVo {
  name: any;
  amount: any;
}
