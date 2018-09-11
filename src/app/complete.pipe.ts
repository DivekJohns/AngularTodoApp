import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'complete'
})
export class CompletePipe implements PipeTransform {

 transform(items: any, searchText: any): any {
    if(searchText == 0) {
    
      return items;
    }
else{
   return items.filter( function(obj) {
      return Object.keys(obj).some(function(object) {
        return obj[object].toString().includes('DontHide');
    });

  });




}
  
  }

}
