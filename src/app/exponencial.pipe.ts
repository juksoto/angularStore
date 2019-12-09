import { Pipe, PipeTransform } from '@angular/core';
/* usa un decorador pipe */
@Pipe({
  name: 'exponencial'
})
export class ExponencialPipe implements PipeTransform {
/* transforma un dato  */
  /*transform(value: any, ...args: any[]): any {
    return null;
  }*/

  transform (value: number): any {
    return Math.pow(value, 2);
  }

}
