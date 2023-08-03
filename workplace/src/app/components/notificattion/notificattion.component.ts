import { Component } from '@angular/core';

@Component({
  selector: 'app-notificattion',
  template: `<div [hidden]="displayNotification">
              <p>This Uses Cookies provide a better user experience

    </p>
    <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
    </div>`,
  styleUrls: ['./notificattion.component.css']
})
export class NotificattionComponent {

  displayNotification: boolean = false;

  closeNotification(){
    this.displayNotification =  true;
  }

}
