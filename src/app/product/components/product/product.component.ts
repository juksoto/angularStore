import {
    Component,
    Input,
    Output,
    EventEmitter,
    ɵConsole,
    OnChanges,
    SimpleChange,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
 } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
// Traemos dinamicamente la informacion a product
/* Como vamos a analizar el onChanges hay que agregar la interfaz, onChanges e implementarlo. */
export class ProductComponent implements  OnInit, DoCheck, OnDestroy {
    // le enviamos al componente producto un array
    @Input() product: Product;
    /* Eventos. Any -> puedo enviar cualquier tipo (string, number). Es para enviar del controlador. Inicializamos el event Emitter */
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    /* Inicio del ciclo de vida del componente */
    constructor() {
        console.log('1. constructor');
    }
/* Detecta los cambios, el anterior y nuevo. Debemos iniciarlo en class como onChange*/
   /* ngOnChanges(changes: SimpleChanges) {
        console.log('2. ngOnChanges');
        console.log(changes);
    }*/
/* Se ejecuta una vez y es para mostrar cuando la interfaz es puesta en pantalla*/
    ngOnInit() {
        console.log('3. On Init');
    }
/*Detecta cambios igual que ngOnChange. ngdoChek lo hace forma nativa. Popr ello solo ocultaomos el ngOncahgne.  */
    ngDoCheck() {
        console.log('4. Do Check');
    }
/* Nos sirve para detectar si se elminar algo. Sirve para destruir */
    ngOnDestroy() {
        console.log('5. OnDestoy');
    }
    addCart() {
        console.log('añadir al carrito');
        /*enviamos el id de l producto*/
        this.productClicked.emit(this.product.id);
    }

}
