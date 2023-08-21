import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent {

  constructor(private userService:UserService){

  }

  users:  { name: string, job: string , gender: string, country: string ,age:number, avatar: string }[]=[]
 

  ngOnInit(){
    this.users = this.userService.users;
  }

  ShowDetais(user: { name: string, job: string , gender: string, country: string ,age:number, avatar: string }){
  this.userService.ShowUserDetails(user);
  }
}
