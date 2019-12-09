import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }
  title = 'Store';
  nombre = '';
  apellido = '';
  nuevoItem = '';
  power = 10;

  items = ['juan', 'pedro', 'carlos'];

  ngOnInit() {
  }

  addItem(v: string) {
    this.items.push(v);
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }

}
