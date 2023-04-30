import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  registrationForm:FormGroup = new FormGroup({})
 

  constructor(public fb:FormBuilder) { 

    this.registrationForm = this.fb.group({
      name:new FormControl('',[Validators.required,Validators.minLength(3)]),
      email:new FormControl('',[Validators.email,Validators.required]),
      password:new FormControl('',[Validators.required, Validators.minLength(3)] ),
      confirmpassword:new FormControl('',[Validators.required])
    },
    {
      Validators: this.MustMatch('password', 'confirmpassword')


  })
}

  ngOnInit(): void {
  }

MustMatch(controlName: string, matchingControlName:string){
  return(formGroup:FormGroup)=>{
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[ matchingControlName];
    if(matchingControl.errors && !matchingControl.errors.MustMatch){
      return
    }
    if(control.value !== matchingControl.value){
      matchingControl.setErrors({MustMatch:true});
    }
    if(control.value !== matchingControl.value){
      matchingControl.setErrors(null);
    }
  }

}


OnSubmit(){
  console.log(this.registrationForm.value);
  this.registrationForm.reset()
}







}
