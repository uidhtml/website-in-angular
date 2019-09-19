import { Component, OnInit } from '@angular/core';
import { AuthService } from '@common/services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {
  constructor(private readonly authService: AuthService) {}

  ngOnInit() {
    this.authService.logout();
  }
}
