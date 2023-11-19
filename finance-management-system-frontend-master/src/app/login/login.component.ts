import { Component, OnInit, importProvidersFrom } from '@angular/core';
import { User } from '../user';
import { LoginuserService } from '../loginuser.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private userservice: LoginuserService, private router: Router, private toastr: ToastrService) {}
  ngOnInit(): void {}
  userLogin() {
    console.log(this.user);
    this.userservice.loginUser(this.user).subscribe(
      (data) => {
       
        this.toastr.success('Login Successfully!');
        
        this.router.navigate(['/categories']);
      
      },  (error) => this.toastr.error('Sorry enter correct userId and Password')
    )
  }
}
