import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) {
    console.log(elem)
    this.elem.nativeElement.style.boxShadow='1px 80px 10px 20px rgba(216, 48, 48, 0.596)';
  }
}
