import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import validateForm from '../helpers/validateform';
import Validation from '../utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
statements: any = ['Doctor', 'Nurse','Beneficiary attendant' ];
registrationForm : FormGroup = new FormGroup({
  personName : new FormControl(""),
  email : new FormControl(""),
  password : new FormControl(""),
  repeatPassword : new FormControl(""),
  statementName : new FormControl(""),
  acceptTerms : new FormControl(false)
});
submitted = false;

/**
 *
 */
constructor(private formBuilder: FormBuilder) {}

ngOnInit(): void {
 this.registrationForm = this.formBuilder.group({
  personName : ['', Validators.required],
  email : ['', [Validators.required, Validators.email]],
  password : ['', 
  [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20) 
  ]
],
phoneNumber: ['', [
  Validators.required,
  Validators.minLength(10),
  Validators.maxLength(15)
]],
repeatPassword : ['', Validators.required],
acceptTerms : [false, Validators.requiredTrue],
statementName : ['', Validators.required]
},
{
  validators: [Validation.match('password', 'repeatPassword')]
},

);

  // this.registrationForm = new FormGroup({
  //   statementName: new FormControl('', Validators.required),
  //   personName: new FormControl('', Validators.required),
  //   email: new FormControl('', Validators.required),
  //   password: new FormControl('', Validators.required),
  //   repeatPassword: new FormControl('', Validators.required),
  //   phoneNumber: new FormControl('', Validators.required),
   
  // })
}

changeStatement(e: any){
 //console.log(this.registrationForm.get('statementName').value);
 
}
onSubmit(): void{
  this.submitted = true;
  if(this.registrationForm.invalid){
    return;
  }

  console.log(JSON.stringify(this.registrationForm.value, null, 2));
}

get f(): {[key: string]: AbstractControl}{
  return this.registrationForm.controls;
}
registerUser(){

  validateForm.validateAllFormFields(this.registrationForm)
  //console.log(this.registrationForm.get('statementName').value);
  //console.log(this.registrationForm.get('PersonName').value)
}

onReset(): void{
  this.submitted = false;
  this.registrationForm.reset();

}
}
