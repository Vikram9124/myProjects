import { Component, OnInit } from '@angular/core';
import { SavingsService } from '../savings.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css'],
})
export class SavingsComponent implements OnInit {
  savingsAmount!: number;

  constructor(private savingsService: SavingsService) {}

  ngOnInit() {
    this.savingsService.getSavingsAmount().subscribe((amount: number) => {
      this.savingsAmount = amount;
    });
  }
}
