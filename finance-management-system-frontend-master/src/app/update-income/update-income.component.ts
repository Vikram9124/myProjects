import { Component, OnInit } from '@angular/core';
import { InvestmentService } from '../investment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeData } from '../income-data/income-data.component';
@Component({
  selector: 'app-update-income',
  templateUrl: './update-income.component.html',
  styleUrls: ['./update-income.component.css'],
})
export class UpdateIncomeComponent implements OnInit {
  id!: number;
  income = new IncomeData();  
  constructor(
    private incomeservice: InvestmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.incomeservice.getIncomeById(this.id).subscribe(
      (data) => {
        this.income = data;
      },
      (error) => console.log(error)
    );
  }
  displayUpdatedIncome() {
    this.incomeservice.updateIncome(this.id, this.income).subscribe(
      (data: any) => {
        this.goToIncomelist();
      }
      // (error) => console.log(error)
    );
  }
  goToIncomelist() {
    this.router.navigate(['/showincome']);
  }
}
