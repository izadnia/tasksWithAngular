import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianTranslate'
})
export class PersianTranslatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
