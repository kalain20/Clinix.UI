import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import validateForm from '../helpers/validateform';
import Validation from '../utils/validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  statements: any = ['Doctor', 'Nurse', 'Beneficiary attendant'];
  registrationForm: FormGroup = new FormGroup({
    personName: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    repeatPassword: new FormControl(""),
    statementName: new FormControl(""),
    acceptTerms: new FormControl(false)
  });
  submitted = false;

  /**
   *
   */
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      personName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['',
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
      repeatPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      statementName: ['', Validators.required]
    },
      {
        validators: [Validation.match('password', 'repeatPassword')]
      },

    );

  }

  changeStatement(e: any) {
    //console.log(this.registrationForm.get("statementName").value);

  }
  onSubmit(): void {
    let userState = this.registrationForm.get("statementName")?.value;
    let name = this.registrationForm.get("personName")?.value;
    let phone = this.registrationForm.get("phoneNumber")?.value;
    this.createUserName(userState, name, phone);
    console.log(this.createUserName(userState, name, phone));
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }
  registerUser() {

    validateForm.validateAllFormFields(this.registrationForm)
    //console.log(this.registrationForm.get('statementName').value);
    //console.log(this.registrationForm.get('PersonName').value)
  }

  onReset(): void {
    this.submitted = false;
    this.registrationForm.reset();

  }

  createUserName(statement: string, name: string, phone: string): string {
    var phoneNumber = "";
    var phoneSplit = phone.split(" ");
    for (let i = 0; i < phoneSplit.length; i++) {
      phoneNumber += phoneSplit[i];
    }
    var userName = (statement.substring(0, 2) + name.substring(0, 4) + phoneNumber.substring(6, 10)).toUpperCase();
    return userName;
  }
}
