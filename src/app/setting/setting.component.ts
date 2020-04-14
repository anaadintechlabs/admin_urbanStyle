import { Component, OnInit } from '@angular/core';
import { ApiService } from '_service/http_&_login/api.service';
import { UserService } from '_service/http_&_login/user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateEvents } from 'angular-calendar/modules/common/util';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  public adminData: any;
  public adminId: number;
  public adminProfileForm: FormGroup;
  public adminPwdForm: FormGroup = new FormGroup({
        oldPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      });
  public editProfile: boolean = false;
  public editPwd: boolean = false;
  public passwordRequest: any;
  public myFiles: string[] = [];
  public urlArray: any[] = [];

  constructor(private apiService: ApiService, 
    private userService: UserService) { }

  ngOnInit() {
   
    
  }




  submitPassword() {
    if(this.adminPwdForm.valid) {
      let url = 'api/user/changePassword';
      this.changePassword(url, this.adminPwdForm.value, {userId: this.adminId});
    } else {
      alert("Invalid!");
    }
    
  }



  changePassword(path, request, param) {
    this.apiService.postUser(path, request, param).subscribe(
      data => {
        console.log(data);
        this.editPwd = false;
      }, error => {
        console.log(error);
      }
    )
  }


}
