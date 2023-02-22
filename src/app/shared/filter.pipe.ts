import { Pipe, PipeTransform } from '@angular/core';
import { user } from '../user/user.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: user[], searchData: string): user[]{
    if (!searchData) {
      return value;
    }

    searchData = searchData.toLowerCase();
    const data = value.filter((item) => {
      return item.status.toLowerCase().indexOf(searchData.toLowerCase()) !== -1;
    })

    return data;
  }

}
