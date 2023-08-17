import { Component } from '@angular/core';
import { EnrollService } from 'src/app/services/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {

  title = "Javascript";
constructor(private enrollService:EnrollService){

}

  OnEnroll(){
   this. enrollService.OnEnrolledClicked(this.title);
  }


}
