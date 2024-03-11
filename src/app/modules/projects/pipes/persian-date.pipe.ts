import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'persianDate',
})
export class PersianDatePipe implements PipeTransform {
  transform(value: number): string {
    const persianDate = this.convertToPersianDate(value);
    return `${persianDate.year}/${persianDate.month}/${persianDate.day}`;
  }

  // Function to convert Gregorian date to Persian date
  convertToPersianDate(gregorianDate: number): {
    year: number;
    month: number;
    day: number;
  } {
    const gregorianEpoch = new Date(Date.UTC(1970, 0, 1));
    const persianEpoch = new Date(Date.UTC(1348, 9, 11));

    const elapsedMilliseconds = gregorianDate - gregorianEpoch.getTime();
    const persianDateMilliseconds =
      persianEpoch.getTime() + elapsedMilliseconds;

    const persianDate = new Date(persianDateMilliseconds);
    const year = persianDate.getUTCFullYear();
    const month = persianDate.getUTCMonth() + 1;
    const day = persianDate.getUTCDate();

    return { year, month, day };
  }
}
