import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHideshow]'
})
export class HideshowDirective {

  constructor(private element: ElementRef) { 
    element.nativeElement.style.color = 'blue';
  }

}
