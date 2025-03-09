import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, data: string) {
    if (value.length === 0 || data === '') return value;

    const a = [];
    for (let an of value) {
      if (an['name'] === data) {
        a.push(an);
      }
    }
    return a;
  }
}
