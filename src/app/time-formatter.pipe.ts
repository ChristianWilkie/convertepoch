import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'floor'
})
export class FloorPipe implements PipeTransform {

  transform(value: number): unknown {
    if (value === undefined || value === null) {
      return '';
    } else {
      return Math.floor(value);
    }
  }

}
