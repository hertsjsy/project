import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title = "Angular";

 

  OnEnroll(){
    const enrollService = new EnrollService();
    enrollService.OnEnrolledClicked(this.title);
  }

}
