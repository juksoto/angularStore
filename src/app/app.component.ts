import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /* Si es un html muy corto, en vez ede mandar un template, se puede enviar un html.
  * No es necesario todo un archivo. Se elimina templateUrl.
  * Code:
  * template: '<router-outlet></router-outlet>';
  */
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Store';
}
