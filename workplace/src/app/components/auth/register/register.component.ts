import { Component } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { CustomvalidationService } from '../../../services/customvalidation.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // registerForm: FormGroup;
  // submitted = false;

  // constructor(
  //   private  formBuilder:FormBuilder,
  //   private customValidator: CustomvalidationService
  // ) { }

  // ngOnInit() {
  //   this.registerForm=this.formBuilder.group({
  //     firstName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
  //     password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
  //     confirmPassword: ['', [Validators.required]],
  //   },
  //     {
  //       validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
  //     }
  //   );
  // }

  // get registerFormControl() {
  //   return this.registerForm.controls;
  // }


  // onSubmit() {
  //   this.submitted = true;
  //   if (this.registerForm.valid) {
  //     alert('Form Submitted succesfully!!!\n Check the values in browser console.');
  //     console.table(this.registerForm.value);
  //   }
  }
