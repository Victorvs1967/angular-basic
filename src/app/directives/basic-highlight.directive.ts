import { ThisReceiver } from '@angular/compiler';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private elementRef: ElementRef) { 
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
    this.elementRef.nativeElement.style.padding = '20px';
    this.elementRef.nativeElement.style.marginTop = '20px';
  }

}
