import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectroute: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        if (
          event.url.includes('login') ||
          event.url === '/' ||
          event.url === '/register'
        ) {
          this.selectroute = false;
        } else {
          this.selectroute = true;
        }
      }
    });
  }
  title = 'FinanceManagement';
}
