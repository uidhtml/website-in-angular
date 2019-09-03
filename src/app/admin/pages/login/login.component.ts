import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ERROR_MESSAGES } from '../../../shared/error-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup;
  public errorMsg = ERROR_MESSAGES;

  constructor(private readonly formBuilder: FormBuilder) {
    this.form = this.formBuilder.group(
      {
        // username: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
        email: ['', Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
        ])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      }
    );
  }

  ngOnInit() {
  }

}
