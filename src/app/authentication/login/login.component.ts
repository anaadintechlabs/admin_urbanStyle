import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '_service/http_&_login/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  authForm : FormGroup;
  
  constructor(
    private _fb: FormBuilder,
    private router:Router, 
    private userService:UserService
  ) {
    this.authForm = this._fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
      });
  }

  loginform = true;
  recoverform = false;

  submitForm() {
    this.userService.attemptAuth(this.authForm.value).subscribe(res=>{
      console.log(res);
    });
  }

  showRecoverForm() {
  	this.loginform = !this.loginform;
  	this.recoverform = !this.recoverform;
  }
}
