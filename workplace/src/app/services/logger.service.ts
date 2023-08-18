import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  LogMessage(name: string, status: string){
    // console.log('A New User with username "'+name'"'with status '+status' has been added. ');
    console.log('A New User Addedd Sucessful')
  }
}
