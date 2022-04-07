import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    switch( value) {  
      case "1": 
      return 'mujer';
      break;
      case "2":
      return 'hombre';
      default:
        return 'desconocido';
    }
  }

}
