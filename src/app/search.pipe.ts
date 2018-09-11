import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any, searchText: any): any {
    if(searchText === undefined || searchText === '') {
    
      return items;
    }
else{
   return items.filter(function(obj) {
      return Object.keys(obj).some(function(object) {
        return obj[object].toString().toLowerCase().includes(searchText.toLowerCase());
    });

  });




}
  
  }

}
