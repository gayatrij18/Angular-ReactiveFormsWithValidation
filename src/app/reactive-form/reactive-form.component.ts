import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myReactiveForm:FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'fullName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'address': new FormControl(null),
      'city': new FormControl(null),
      'phoneNo': new FormControl(null, [Validators.minLength(10), Validators.maxLength(12)]),
      'password': new FormControl(null, Validators.minLength(6)),
      'confirmPassword': new FormControl(null)

    });

    
  }

  onSubmit()
  {
    console.log(this.myReactiveForm);
    
  }
}
