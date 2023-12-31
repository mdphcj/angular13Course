import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'pink';
  @Input() title: string = 'This is title';

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter() {
    this.background = this.highlightColor;
    this.border = '2px solid red';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.background = this.defaultColor;
    this.border = 'none';
  }
}
