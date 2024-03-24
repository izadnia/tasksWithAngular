import { Injectable } from '@angular/core';
import moment from 'jalali-moment';
import { Projects } from '../models/Projects';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  constructor() {}
  calendar: any[][] = [];
  monthName = '';
  monthNames = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند',
  ];
  jalaliDate = moment(); // Creating a Jalali-Moment object
  month = this.jalaliDate.jMonth();
  year = this.jalaliDate.jYear();

  jalaliCal(data: Projects[]) {
    const startDate = moment.jDaysInMonth(this.year, this.month); // Getting the total number of days in the month

    // Start from the first day of the month
    let currentDate = moment(startDate)
      .jYear(this.year)
      .jMonth(this.month)
      .jDate(1);

    let weeks: { dayString: string; events: Projects[] }[][] = [];
    let currentWeek: { dayString: string; events: Projects[] }[] = [];

    // Generate weeks until the end of the month
    while (currentDate.jMonth() === this.month) {
      const dayString = currentDate.format('jD'); // Format day of the month in Jalali calendar
      let event: any[] = [];
      for (let index = 0; index < data.length; index++) {
        if (
          (+data[index].initDate.slice(0, 4) == this.year &&
            +data[index].initDate.slice(5, 7) == this.month + 1 &&
            +data[index].initDate.slice(8, 10) == +dayString) ||
          (+data[index].finishDate.slice(0, 4) == this.year &&
            +data[index].finishDate.slice(5, 7) == this.month + 1 &&
            +data[index].finishDate.slice(8, 10) == +dayString)
        ) {
          event.push(data[index]);
        } else {
        }
      }
      currentWeek.push({ dayString, events: event });

      // Add day with empty events array
      if (currentDate.jDay() === 6 || currentWeek.length === 7) {
        // 6 corresponds to the end of the week in Jalali calendar

        // Fill first week with "-1" if less than 7 days
        if (currentWeek.length < 7) {
          for (let i = currentWeek.length; i < 7; i++) {
            currentWeek.unshift({ dayString: '', events: [] });
          }
        }

        // Fill last week with "-1" if less than 7 days
        if (weeks.length === 0 && currentWeek.length < 7) {
          for (let i = currentWeek.length; i < 7; i++) {
            currentWeek.push({ dayString: '-1', events: [] });
          }
        }

        weeks.push(currentWeek);
        currentWeek = [];
      }

      currentDate = moment(currentDate).add(1, 'day');
    }

    // Push the last week (if any)
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    // Log the calendar to see if it's populated correctly (optional)
    // console.log('Calendar:', weeks);

    this.calendar = weeks;
    this.monthName = this.monthNames[this.month];
  }

  nextmonth(data: Projects[]) {
    if (this.month == 11) {
      this.month = 0;
      this.year = this.year + 1;
    } else {
      this.month = this.month + 1;
    }
    this.jalaliCal(data);
  }
  today(data: Projects[]) {
    this.month = this.jalaliDate.jMonth();
    this.year = this.jalaliDate.jYear();
    this.jalaliCal(data);
  }
  prevmonth(data: Projects[]) {
    if (this.month == 0) {
      this.month = 11;
      this.year = this.year - 1;
    } else {
      this.month = this.month - 1;
    }
    this.jalaliCal(data);
  }
}
