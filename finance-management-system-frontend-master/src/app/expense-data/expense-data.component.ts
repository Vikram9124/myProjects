import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-expense-data',
  templateUrl: './expense-data.component.html',
  styleUrls: ['./expense-data.component.css'],
})
export class ExpenseDataComponent {
  formData = new ExpenseData();

  constructor(private http: HttpClient, private itemService: ItemService) {}

  submitExpense() {
    // Send the data to the Spring Boot API
    this.http
      .post('http://localhost:8080/expense/postexpense', this.formData)
      .subscribe(
        (response) => {
          alert('Data sent successfully');
          // Reset the form or perform other actions as needed
        },
        (error) => {
          alert('Error sending data');
        }
      );
  }
  ngOnInit() {
    this.itemService.getSelectedItem().subscribe((item) => {
     this.formData.name = item;
    });
  }
}
export class ExpenseData {
  name:string=''; 
  amount: any;
  date: any;
}
