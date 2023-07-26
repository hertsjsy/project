import { Component } from '@angular/core';
import {FormGroup,FormBuilder,FormControl,Validators} from"@angular/forms"
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent {
  loginForm:FormGroup
  submitted = false;
  constructor(
    private  formBuilder:FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
  this.createLoginForm();
}
  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }


  onSubmit(){
    this.submitted = true;
    if (this.loginForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.loginForm.value);
    
    }
   
  }
}
