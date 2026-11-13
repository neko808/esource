import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

	transform(text: String, length:any ): any {
	    if (!text || !length) {
	      return text;
	    }
	    if (text.length > length) {
	      return text.substr(0, length) + '...';
	    }
	      return text;
	}

}


