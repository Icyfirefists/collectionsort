import { Pipe, PipeTransform } from '@angular/core';
/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 *  value | capitalizefirst
 * Example:
 *  // value.name = daniel
 *  {{ value.name | capitalizefirst  }}
 *  fromats to: Daniel
*/
@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value === null) return 'Not assigned';
    else if(value.indexOf(' ') > -1) {
      let spaceCount = value.match((/ /g)).length;
      let combinedString = "";
      for (let i=0;i<=spaceCount;i++) {
        if (i < spaceCount){
          combinedString += value.split(' ')[i].charAt(0).toUpperCase() + value.split(' ')[i].slice(1) + ' ';
        } else {
          combinedString += value.split(' ')[i].charAt(0).toUpperCase() + value.split(' ')[i].slice(1);
        }
      }
      return combinedString;
    }
    else {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    


  }
}