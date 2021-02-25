import { User } from './model.ts/Users';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(users: User[], searchValue: string): User[]{
    if(!users || !searchValue){
      return users;
    }
    return users.filter(user=> user.firstName?.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
