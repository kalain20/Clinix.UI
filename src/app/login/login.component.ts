import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import validateForm from '../helpers/validateform';
import { AuthentificationService } from '../services/authentification.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;
  state: boolean = true;
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = "fa-eye-slash"
  constructor(private authentificationService : AuthentificationService, private router : Router ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
    console.log(this.isText);
  }
  logInUser() {
    if (this.loginForm.get("username").value == null ||
      this.loginForm.get("password").value == null ||
      this.loginForm.get("username").value == '' ||
      this.loginForm.get("password").value == ''
    ) {
      validateForm.validateAllFormFields(this.loginForm);
      this.state = false;
      console.warn(this.state);
    } else {
      this.state = true;
     this.authentificationService.login(this.loginForm.value)
     .subscribe({
      next: (res) => {
        if(res.Statement == "Doctor"){
          this.loginForm.reset();
          this.router.navigate(['/medecin']);
        }
        else if(res.Statement == "Nurse"){
          this.loginForm.reset();
          this.router.navigate(['/infirmier']);
        }
        else{
          this.loginForm.reset();
          this.router.navigate(['/soignant']);
        }
      }, 
       error: (err) => {
        alert(err.error.message)
       }
     })
      console.log(this.loginForm.value);
    }
  }
 
}
