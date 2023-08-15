import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
 AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() value: string = 'Angular'

  constructor(){
    console.log("Angular")
    console.log(this.value)

  }

  ngOnChanges(){
  console.log('Onchnge called')
  }

  ngOnInit() {
    console.log(this.value)
  }

  ngDoCheck(){
    console.log('docheck called')

  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit called')


  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called')

  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit called')
  
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called')

  }
  ngOnDestroy(){
    console.log('ngOnDestroy called')

  }
}
