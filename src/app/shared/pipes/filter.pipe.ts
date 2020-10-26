import {Pipe, PipeTransform} from '@angular/core';
 
@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(items: any, args?: any): any {
    if(args === undefined || args === '') { return items; }
    return items.filter(function(item){
      //Logic for Example Fields being filtered
      if (item.occupation.toLowerCase() === args.toLowerCase()){
      return item;
      } else if (item.sex.toLowerCase() === args.toLowerCase()){
      return item;
      }      
    })
  }

}

  
