import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('myForm', {static: true}) myForm;
  fullName:string;
  email:string;
  phoneNo:number;
  password:string;
  confirmPassword:string;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm) {
    
    console.log(myForm.value.uname);
    console.log(myForm.value.emailAddress);
    console.log(myForm.value);
    this.myForm.reset();
    
  }

}
