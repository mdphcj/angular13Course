import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input()
  value: string = "procademy";
  // constructor() {
  //   console.log("Constructor called!");
  //   console.log("this.value in constructor--> ", this.value);
  // }

  // ngOnChanges(change: SimpleChanges) {
  //   console.log("ngOnChanges called!");
  //   console.log("this.value in ngOnChanges--> ", this.value);
  //   console.log("change ", change);

  // }

  // ngOnInit() {
  //   console.log("ngOnInit called!");
  //   console.log("this.value in ngOnInit--> ", this.value);
  // }

  // ngDoCheck() {
  //   console.log("ngDoCheck called!");
  //   console.log("this.value in ngDoCheck--> ", this.value);
  // }
  // ngAfterContentInit() {
  //   console.log("ngAfterContentInit called!");
  //   console.log("this.value in ngAfterContentInit--> ", this.value);
  // }
  // ngAfterContentChecked() {
  //   console.log("ngAfterContentChecked called!");
  //   console.log("this.value in ngAfterContentChecked--> ", this.value);
  // }
  // ngAfterViewInit() {
  //   console.log("ngAfterViewInit called!");
  //   console.log("this.value in ngAfterViewInit--> ", this.value);
  // }
  // ngAfterViewChecked() {
  //   console.log("ngAfterViewChecked called!");
  //   console.log("this.value in nngAfterViewChecked--> ", this.value);
  // }
  ngOnDestroy() {
    console.log("ngOnDestroy called!");
    console.log("this.value in ngOnDestroy--> ", this.value);
  }

}
