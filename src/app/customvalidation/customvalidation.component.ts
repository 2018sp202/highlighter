import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
@Component({
  selector: 'app-customvalidation',
  templateUrl: './customvalidation.component.html',
  styleUrls: ['./customvalidation.component.css']
})
export class CustomvalidationComponent implements OnInit {

  registrationForm:FormGroup = new FormGroup({})
 

  constructor(public fb:FormBuilder,  private customValidator: CustomvalidationService) { 

    this.registrationForm = this.fb.group({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.email,Validators.required]),
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: new FormControl(['', [Validators.required]]),
    },
    {
      validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
    }
  );
    

  

}

get registerFormControl() {
  return this.registrationForm.controls;
}

  ngOnInit(): void {
  }




OnSubmit(){
  console.log(this.registrationForm.value);
  this.registrationForm.reset()
}











  
}
