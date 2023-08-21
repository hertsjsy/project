import { Component, OnInit } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';
import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workplace';

  constructor(private enrollService:EnrollService, private loggerService:LoggerService,private userService:UserService){

  }

//   inputText: string ="";
// destory: boolean = true;
//   OnSubmit(input: HTMLInputElement){

//     this.inputText = input.value

//   }

//   DestoryComponent(){
//     this.destory = false
//   }

// users: {name:string, status:string}[]= [];
// ngOnInit(){
//   this.users = this.enrollService.users;
// }
}
