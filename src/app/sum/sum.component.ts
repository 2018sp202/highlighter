import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.css']
})
export class SumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }
  num1?:number;
  num2?:number;
  output?:number;

  add(){
    this.output = + this.num1! + +this.num2!;
  }
  sub(){
    this.output = + this.num1! - +this.num2!;
  }
  mul(){
    this.output = + this.num1! * +this.num2!;
  }
  div(){
    this.output = + this.num1! / +this.num2!;
  }
  
}
