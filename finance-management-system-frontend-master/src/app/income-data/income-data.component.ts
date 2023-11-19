import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-income-data',
  templateUrl: './income-data.component.html',
  styleUrls: ['./income-data.component.css'],
})
export class IncomeDataComponent {
  formData = new IncomeData();

  constructor(private http: HttpClient) {}

  submitincome() {
    // Send the data to the Spring Boot API
    this.http
      .post('http://localhost:8080/income/postincome', this.formData)
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
}
export class IncomeData {
  name: any;
  amount: any;
  date: any;
}
