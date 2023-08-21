import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
 constructor(private userService:UserService){
 }

 user: { name: string, job: string , gender: string, country: string ,age:number, avatar: string }


 ngOnInit(){
  this.userService.OnShowDetailClicked.subscribe((data: { name: string, job: string , gender: string, country: string ,age:number, avatar: string })=>{
    this.user= data;
  })
 }
}
