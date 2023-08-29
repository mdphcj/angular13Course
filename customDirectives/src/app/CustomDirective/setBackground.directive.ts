import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[setBackground]'
})
export class SetBackgroundDirective implements OnInit {
  constructor(private element: ElementRef) {
  }
  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = '#c8e6C9';
  }
}