import { Component } from '@angular/core';
import { ExpenseData } from '../expense-data/expense-data.component';
import { InvestmentService } from '../investment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-expense',
  templateUrl: './update-expense.component.html',
  styleUrls: ['./update-expense.component.css'],
})
export class UpdateExpenseComponent {
  expense = new ExpenseData();
  id: any;
  constructor(
    private expenseservice: InvestmentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.expenseservice.getExpenseById(this.id).subscribe(
      (data) => {
        this.expense = data;
      },
      (error) => console.log(error)
    );
    console.log(this.expense.name)
  }
  displayUpdatedExpense() {
    this.expenseservice.updateExpense(this.id, this.expense).subscribe(
      (data: any) => {
        this.goToExpenseList();
      }
      // (error) => console.log(error)
    );
  }
  goToExpenseList() {
    this.router.navigate(['/showexpense']);
  }
}
