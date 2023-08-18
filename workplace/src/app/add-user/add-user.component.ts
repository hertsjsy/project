import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  username:string ='';
  status: string= 'active';
  


  constructor(private enrollService: EnrollService){

  }

  Adduser(){
    this.enrollService.AddNewUser(this.username,this.status);
    // console.log(this.enrollService.users);
  }
}
