import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  constructor() { }

 

  genders = ['male', 'female'];

  public form={
    username: '',
    email: '',
    password: '',
    date:'',
    gender: '',
    address: '',
    confirmpassword: '',
    acceptTerms: false,
  }
ngOnInit(): void {
  
}
  onSubmit(): void {
    console.log(this.form);
    alert(' Successfully Registered');
    
  }

  
 
  
}
