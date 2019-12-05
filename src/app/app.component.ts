import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Store';
  nombre = '';
  apellido = '';
  nuevoItem = '';

  items = ['juan', 'pedro', 'carlos'];
  addItem(v: string) {
    this.items.push(v);
  };

  removeItem(index: number){
    this.items.splice(index, 1);
  }
}
