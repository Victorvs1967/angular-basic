import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBestDirective]'
})
export class BestDirectiveDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string | undefined;
  @HostBinding('style.color') color: string;
  @HostBinding('style.padding') padding: string | undefined;

  constructor() { 
    this.color = 'black';
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = 'blue';
    this.color = 'white';
    this.padding = '20px';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = 'yellow';
    this.color = 'black';
    this.padding = '20px';
  }

}
