import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workplace';

  inputText: string ="";
destory: boolean = true;
  OnSubmit(input: HTMLInputElement){

    this.inputText = input.value

  }

  DestoryComponent(){
    this.destory = false
  }
}
