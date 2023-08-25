import { Component, ContentChild, ElementRef, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @ContentChild('paragraph') paragraphEl: any;
  ngOnInit() {
    console.log(this.paragraphEl);
  }
  ngAfterContentInit() {
    this.paragraphEl.nativeElement.textContent = "Md is great";
    console.log(this.paragraphEl.nativeElement.textContent);
  }
}
