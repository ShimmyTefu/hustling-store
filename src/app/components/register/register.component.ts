import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!:FormGroup
  selected:string [] = ['Male','Females']
  emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;

  constructor(){
    this.registerForm  = new FormGroup({
      name:new FormControl('',Validators.required),
      surname:new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(4)]),
      gender:new FormControl('',Validators.required)
    })
  }

}
