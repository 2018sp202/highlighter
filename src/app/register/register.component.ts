import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 

  ngOnInit(): void {
  }

  submitted = false;
  
  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  constructor(public fb: FormBuilder) {}
  
  registrationForm = this.fb.group({
    file: [null],
    fullName: this.fb.group({
      firstName: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.pattern('^[_A-z0-9]*((-|s)*[_A-z0-9])*$'),
        ],
      ],
      lastName: ['', [Validators.required]],
    }),
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
      ],
    ],

    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern('^[0-9]+$'),
      ],
    ],
    address: this.fb.group({
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      cityName: ['', [Validators.required]],
    }),
    gender: ['male'],
  });
}
