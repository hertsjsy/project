import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  OnEnrolledClicked(title: string) {
    alert('Thank you for enrolling to' + title + 'course');
  }

  constructor(private loggerService: LoggerService) { }

  users = [

    { name: 'John', status: 'Active' },
    { name: 'Mark', status: 'InActive' },
    { name: 'Grrk', status: 'Active' },
    { name: 'Plish', status: 'InActive' }
  ]
  AddNewUser(name: string, status: string){
    this.users.push({name:name, status:status})
    this.loggerService.LogMessage(name,status)  
  }
}
