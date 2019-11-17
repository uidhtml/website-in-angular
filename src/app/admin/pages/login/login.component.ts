import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from '@common/msg/error-messages';
import { HttpService } from '@services/http.service';
import { ApiHostService } from '@services/api-host.service';
import { Router } from '@angular/router';
import { ROUTE_URLS } from '@app/route-urls.const';
import { AuthService } from '@app/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public errorMsg = ERROR_MESSAGES;
  public hide: boolean = true;
  public a = 'abc';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly apiHostService: ApiHostService,
    private readonly httpService: HttpService,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.form = this.formBuilder.group({
      email: [
        'gautam.4537@gmail.com',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])
      ],
      password: [
        'kingbadshah@12',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ]
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.navigateToDashboard();
    }
  }
  hidePassword($event: Event) {
    this.hide = !this.hide;
    return false;
  }
  onSubmit($event: Event) {
    this.httpService
      .login(this.apiHostService.concatUrl('/login.php'), {
        email: this.form.get('email').value,
        password: this.form.get('password').value
      })
      .subscribe((data: { success: string; msg: string }) => {
        if (data.success) {
          localStorage.setItem('email', this.form.get('email').value);
          this.authService.isLoggedIn = true;
          this.navigateToDashboard();
        }
      });
    return false;
  }

  navigateToDashboard() {
    this.router.navigate([`${ROUTE_URLS.ADMIN}/${ROUTE_URLS.DASHBAORD}`]);
  }
}
