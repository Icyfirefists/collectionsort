
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'search'})
export class SearchPipe implements PipeTransform {
  transform(users: any, searchText: any): any {
    if(searchText == null || searchText == '') return users;
    //Example Fields to search by
    //Uses Javascript filter() function to search.
    //Effectively the same as filter but to narrow down a search further
    return users.filter(function(user){
    if (user.fname.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
      //First Name
      return user.fname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    } else if (user.lname.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
      //Last Name
      return user.lname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    }else if ((user.age+"").indexOf(searchText) > -1) {
      //Age
      return (user.age+"").indexOf(searchText) > -1;
    }          
    })
  }
}