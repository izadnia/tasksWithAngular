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
  dateFirst = '';
  dateSecond = '';
  jalaliDate = moment(); // Creating a Jalali-Moment object
  month = this.jalaliDate.jMonth();
  year = this.jalaliDate.jYear();
  dateHandler(data: any, i: number, j: number) {
    let temp = this.year + '/' + (this.month + 1) + '/' + data.dayString;
    if (
      this.dateFirst == temp ||
      (this.dateFirst == temp && this.dateSecond == '' && this.dateSecond)
    ) {
      this.dateFirst = this.dateSecond;
      this.dateSecond = '';
      this.calendar[i][j].firstDate = false;
    } else if (
      this.dateFirst == temp ||
      (this.dateFirst == temp && this.dateSecond == '')
    ) {
      this.dateFirst = '';
      this.calendar[i][j].firstDate = false;
    } else if (
      this.dateSecond == temp ||
      (this.dateSecond == temp && this.dateSecond == '')
    ) {
      this.dateSecond = '';
      this.calendar[i][j].secondDate = false;
    } else if (!this.dateFirst) {
      this.dateFirst = temp;
      this.calendar[i][j].firstDate = true;
    } else if (!this.dateSecond) {
      this.dateSecond = temp;
      this.calendar[i][j].secondDate = true;
    }

    // console.log(this.calendar);
    // console.log('1 :', this.dateFirst, '2 : ', this.dateSecond);
  }
  jalaliCal(data: Projects[]) {
    console.log('1 :', this.dateFirst, '2 : ', this.dateSecond);
    console.log(this.dateFirst.split('/')[1]);
    const startDate = moment.jDaysInMonth(this.year, this.month); // Getting the total number of days in the month

    // Start from the first day of the month
    let currentDate = moment(startDate)
      .jYear(this.year)
      .jMonth(this.month)
      .jDate(1);

    let weeks: { dayString: string; events: Projects[] }[][] = [];
    let currentWeek: {
      dayString: string;
      events: Projects[];
      firstDate: boolean;
      secondDate: boolean;
    }[] = [];

    // Generate weeks until the end of the month
    while (currentDate.jMonth() === this.month) {
      const dayString = currentDate.format('jD'); // Format day of the month in Jalali calendar
      let event: any[] = [];
      for (let index = 0; index < data.length; index++) {
        if (
          (+data[index].initDate.split('/')[0]== this.year &&
            +data[index].initDate.split('/')[1]== this.month + 1 &&
            +data[index].initDate.split('/')[2] == +dayString) ||
          (+data[index].finishDate.split('/')[0]== this.year &&
            +data[index].finishDate.split('/')[1]== this.month + 1 &&
            +data[index].finishDate.split('/')[2] == +dayString)
        ) {
          event.push(data[index]);
        }
      }
      if (
        +this.dateFirst.split('/')[0] == this.year &&
        +this.dateFirst.split('/')[1] == this.month + 1 &&
        +this.dateFirst.split('/')[2] == +dayString
      ) {
        currentWeek.push({
          dayString,
          events: event,
          firstDate: true,
          secondDate: false,
        });
      } else if (
        +this.dateSecond.split('/')[0] == this.year &&
        +this.dateSecond.split('/')[1] == this.month + 1 &&
        +this.dateSecond.split('/')[2] == +dayString
      ) {
        currentWeek.push({
          dayString,
          events: event,
          firstDate: false,
          secondDate: true,
        });
      } else {
        currentWeek.push({
          dayString,
          events: event,
          firstDate: false,
          secondDate: false,
        });
      }

      // Add day with empty events array
      if (currentDate.jDay() === 6 || currentWeek.length === 7) {
        // 6 corresponds to the end of the week in Jalali calendar

        // Fill first week with "-1" if less than 7 days
        if (currentWeek.length < 7) {
          for (let i = currentWeek.length; i < 7; i++) {
            currentWeek.unshift({
              dayString: '',
              events: [],
              firstDate: false,
              secondDate: false,
            });
          }
        }

        // Fill last week with "-1" if less than 7 days
        if (weeks.length === 0 && currentWeek.length < 7) {
          for (let i = currentWeek.length; i < 7; i++) {
            currentWeek.push({
              dayString: '-1',
              events: [],
              firstDate: false,
              secondDate: false,
            });
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
