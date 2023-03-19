import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
statements: any = ['Doctor', 'Nurse','Beneficiary attendant' ];
registrationForm : FormGroup | any;
ngOnInit(): void {
  this.registrationForm = new FormGroup({
    statementName: new FormControl('', Validators.required),
    PersonName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    repeatPassword: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required)
   
  })
}

changeStatement(e: any){
 console.log(this.registrationForm.get('statementName').value);
 
}

registerUser(){
  console.log(this.registrationForm.get('statementName').value);
  console.log(this.registrationForm.get('PersonName').value)
}
}
