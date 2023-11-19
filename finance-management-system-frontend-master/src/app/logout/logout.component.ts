import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  router: any;
  route: any;
  gotoLoginpage() {
    this.router.navigateByUrl('login');
  }

  goToItems() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }
}
