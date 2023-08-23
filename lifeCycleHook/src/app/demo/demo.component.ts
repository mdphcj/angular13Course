import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  constructor(){
    console.log("Constructor called!");
    console.log(this.value);
    
    
  }
  
  @Input()
  value: string = "procademy";

}
