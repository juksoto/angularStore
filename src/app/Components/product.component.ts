import { Component, Input, Output, EventEmitter, ɵConsole} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
// Traemos dinamicamente la informacion a product
export class ProductComponent {
    // le enviamos al componente producto un array
    @Input() product: Product;
    /* Eventos. Any -> puedo enviar cualquier tipo (string, number). Es para enviar del controlador. Inicializamos el event Emitter */
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
        console.log('añadir al carrito');
        /*enviamos el id de l producto*/
        this.productClicked.emit(this.product.id);
    }

}
