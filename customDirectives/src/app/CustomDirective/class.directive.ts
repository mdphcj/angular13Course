import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set display(value: Object) {
    let entries = Object.entries(value);
    // console.log(entries);
    for (let [className, conditionValue] of entries) {
      if (conditionValue) {
        this.renderer.addClass(this.element.nativeElement, className);
      } else {

      }
    }
  }
}
