import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filteringData'
})
export class FilteringDataPipe implements PipeTransform {

  transform(value: any, filter:string) {
    
    if (filter === ''){
      return value
    }else{
      let matches:string[] = [];
      for(let valu of value){
      if ( valu.nombre.includes( filter )) {
        matches.push(valu)
      }
      }
      return matches
    }
  }

}
