/* ElemetnRef es el que modifica el comportamiento del DOM */
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element:ElementRef
  ) {
    /* Ubicamos el elemento nativo que tenga el selector y modificaremos su estilo background */
    element.nativeElement.style.backgroundColor = 'red';
   }


}
