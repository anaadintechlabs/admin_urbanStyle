import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html'
})
export class Login2Component {
  constructor() {}
  authForm : FormGroup;
  loginform = true;
  recoverform = false;

  showRecoverForm() {
  	this.loginform = !this.loginform;
  	this.recoverform = !this.recoverform;
  }
}
