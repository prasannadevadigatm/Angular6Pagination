import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationLoop'
})
export class PaginationLoopPipe implements PipeTransform {

  transform(value: any, start:any, end:any): any {
    
    value = new Array(end - start);
    for (var i = 0; start < end; start++, i++) {
        value[i] = start;
    }

    return value;
  }

}