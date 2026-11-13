import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'matchesCategory'
})
export class MatchesCategoryPipe implements PipeTransform {

  transform(value: any, args?: any): any {

        let uniqueArray = value.filter(function (el, index, array) { 
     		return array.indexOf (el) == index;
    	});

  	    return uniqueArray;
  	    
    }

}
