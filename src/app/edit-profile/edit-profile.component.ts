import { Component, OnInit } from '@angular/core';
import { ApiService } from '_service/http_&_login/api.service';
import { UserService } from '_service/http_&_login/user-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateEvents } from 'angular-calendar/modules/common/util';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  imageUrl = "http://localhost:8081/urban/downloadFile/";
  userUrl='http://localhost:8081/urban/'
  
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
    this.getAdminData();
    
  }


  getAdminData() {
    this.adminId = Number(JSON.parse(this.userService.getUser()).id);
    console.log(this.adminId);

   

    let url =  'api/user/getUserById';
    this.getAdminDataFromApi(url, {userId: this.adminId});
  }

  createProfileForm() {
    this.adminProfileForm = new FormGroup({
      id: new FormControl(this.adminData.id, [Validators.required]),
      name: new FormControl(this.adminData.name, [Validators.required]),
      phoneNumber: new FormControl(this.adminData.phoneNumber, [Validators.required]),
      email: new FormControl(this.adminData.email, [Validators.required])
    })
  }

  onSelectFile(event) {
    this.myFiles= [];
    this.urlArray=[];
    for (var i = 0; i < event.target.files.length; i++) { 

    console.log(event.target.files);
    this.myFiles.push(event.target.files[i]);

      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[i]); // read file as data url
        
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.urlArray.push(reader.result);
      }
    }
    console.log(this.myFiles);
    console.log(this.urlArray);
  }

  

  editPassword() {
    this.editPwd = true;
  }

  editProfiles() {
    this.editProfile = true;
  }

  submitProfile() {
    if(this.adminProfileForm.valid) {
      const profileData = this.adminProfileForm.value;
      console.log(profileData);

      console.log(this.myFiles);
      const formData = new FormData();
      formData.append("userString", JSON.stringify(profileData));
      for (var i = 0; i < this.myFiles.length; i++) { 
        formData.append("file", this.myFiles[i]);
      }

      let url = this.userUrl+'api/user/updateUser';
      this.updateUser(url, formData);
    } else {
      alert("Invalid Details!");
    }
  }

  submitPassword() {
    if(this.adminPwdForm.valid) {
      let url = 'api/user/changePassword';
      this.changePassword(url, this.adminPwdForm.value, {userId: this.adminId});
    } else {
      alert("Invalid!");
    }
    
  }

  falseEdit() {
    this.editProfile = false;
    this.editPwd = false;
  }

  getAdminDataFromApi(path, params) {
    this.apiService.getUser(path, params).subscribe(
      data => {
        this.adminData = data.data.user;
        this.createProfileForm();
        console.log(this.adminData);
      }, error => {
        console.log(error);
      }
    )

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

  updateUser(url, body) {
    this.apiService.putUserWithMedia(url, body).subscribe(
      data => {
        console.log(data);
        this.getAdminData();
        this.editProfile = false;
      }, error => {
        console.log(error);
      }
    )
  }

}
