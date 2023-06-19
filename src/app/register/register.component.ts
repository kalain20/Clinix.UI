import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import validateForm from '../helpers/validateform';
import Validation from '../utils/validation';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  statements: any = ['Doctor', 'Nurse', 'Beneficiary attendant'];
  addresses: any = ['Abobo', 'Adjame', 'Cocody', 'Koumassi', 'Port-Bouet', 'Treichville', 'Marcory', 'Yopougon', 'Plateau'];
  registrationForm: FormGroup = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    password: new FormControl(""),
    repeatPassword: new FormControl(""),
    statement: new FormControl(""),
    address: new FormControl(""),
    acceptTerms: new FormControl(false)
  });
  submitted = false;

  /**
   *
   */
  constructor(private formBuilder: FormBuilder, private registrationService: AuthentificationService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      id: [''],
      token: [''],
      userName: [],
      name: ['', Validators.required],
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
      acceptTerm: [false, Validators.requiredTrue],
      address: ['', Validators.required],
      statement: ['', Validators.required]
    },
      {
        validators: [Validation.match('password', 'repeatPassword')]
      },

    );

  }

  changeStatement(e: any) {
    //console.log(this.registrationForm.get("statementName").value);

  }
  onSubmit() {
    let userState = this.registrationForm.get("statement")?.value;
    let name = this.registrationForm.get("name")?.value;
    let phone = this.registrationForm.get("phoneNumber")?.value;
    this.createUserName(userState, name, phone);
    // console.log(this.createUserName(userState, name, phone));

    console.log(this.registrationForm)
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    } else {
      this.registrationForm.controls["userName"].setValue(this.createUserName(userState, name, phone));
      this.registrationForm.controls["id"].setValue(this.createUserName(userState, name, phone));
      this.registrationForm.controls["acceptTerm"].setValue(true);
      this.registrationForm.controls["token"].setValue("");
      this.registrationService.signUp(this.registrationForm.value)
        .subscribe({
          next: (res => {
            alert(res.message)
          })
        })
    }
  }

  onCheckboxChange(e: any): boolean {
    if (e.target.checked) {
      alert("asasassa")
      return true;
    } else {
      return false;
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
