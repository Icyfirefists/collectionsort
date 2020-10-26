import {Pipe, PipeTransform} from '@angular/core';
import { Item } from '../data/models/item';

@Pipe({  name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(items: Array<any>, args?: any): any {
    let prop = args.property;
    let iPropA: any;
    let iPropB: any;   
    return items.sort(function(a: Item, b: Item){
      //Switch Statement here combs through all of the properties of the elements in the data array
      //It tests for which column is being sorted.
      //It sets the fields that are to be compared to each other.
      switch(prop){
        case "id":
          iPropA = a.id;
          iPropB = b.id;
          break;
        case "first name":
          iPropA = a.fname;
          iPropB = b.fname;
          break;
        case "last name":
          iPropA = a.lname;
          iPropB = b.lname;
          break;
        case "username":
          iPropA = a.username;
          iPropB = b.username;
          break;
        case "sex":
          iPropA = a.sex;
          iPropB = b.sex;
          break;
        case "age":
          iPropA = a.age;
          iPropB = b.age;
          break;
        case "phone":
          iPropA = a.phone;
          iPropB = b.phone;
          break;
        case "occupation":
          iPropA = a.occupation;
          iPropB = b.occupation;    
          break;
      }
      if(iPropA < iPropB){  
      //Compares the sort property value of the first item to the second.
      //If it is less then...      
        return -1 * args.direction;        
      }
      else if(iPropA > iPropB){
      //If it is greater then...
        return 1 * args.direction;        
      }
      else{
      //Otherwise...
        return 0;
      }
    });
  };
}

