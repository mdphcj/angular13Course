import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[setBackground]'
})
export class SetBackgroundDirective implements OnInit {
  // private element: ElementRef;
  constructor(private element: ElementRef) {
    // element.nativeElement.style.backgroundColor = '#c8e6C9';
    this.element = element;
  }
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#c8e6C9';
  }
}