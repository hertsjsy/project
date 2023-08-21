import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users = [
    {name: 'Rohan', job: 'It', gender: 'Male', country:'USA',age:30, avatar:'assets/products/images (1).jpg'},
    {name: 'Johan', job: 'It', gender: 'Male', country:'USA',age:30, avatar:'assets/products/images (2).jpg'},
    {name: 'Mohan', job: 'It', gender: 'Male', country:'USA',age:30, avatar:'assets/products/images (3).jpg'},
    {name: 'Sohan', job: 'It', gender: 'Male', country:'USA',age:30, avatar:'assets/products/images (4).jpg'},
    {name: 'Nohan', job: 'It', gender: 'Male', country:'USA',age:30, avatar:'assets/products/images.jpg'},
    {name: 'Hohan', job: 'It', gender: 'Male', country:'USA',age:30, avatar:'assets/products/images.png'}

  ]

  OnShowDetailClicked = new EventEmitter<{ name: string, job: string , gender: string, country: string ,age:number, avatar: string }>();

  ShowUserDetails(user: { name: string, job: string , gender: string, country: string ,age:number, avatar: string }){

    this.OnShowDetailClicked.emit(user);

  }
}
