import { Component, OnInit } from '@angular/core';
import moment from 'jalali-moment'; // Importing Jalali-Moment correctly

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendar: any[][] = [];

  constructor() {}

  jalaliDate = moment(); // Creating a Jalali-Moment object
  month = this.jalaliDate.jMonth();
  year = this.jalaliDate.jYear();

  ngOnInit(): void {
    this.jalaliCal();
  }
  jalaliCal() {
    console.log('Month:', this.month); // Log the month to see if it's correct
    console.log('Year:', this.year); // Log the year to see if it's correct

    const startDate = moment.jDaysInMonth(this.year, this.month); // Getting the total number of days in the month
    console.log('Start Date:', startDate); // Log the start date to see if it's correct

    // Start from the first day of the month
    let currentDate = moment(startDate)
      .jYear(this.year)
      .jMonth(this.month)
      .jDate(1);
    console.log('Current Date:', currentDate); // Log the current date to see if it's correct

    let weeks: any[] = [];
    let currentWeek: any[] = [];

    // Generate weeks until the end of the month
    while (currentDate.jMonth() === this.month) {
      currentWeek.push(moment(currentDate)); // Using moment() to create a Jalali-Moment object
      if (currentDate.jDay() === 6 || currentWeek.length === 7) {
        // 6 corresponds to the end of the week in Jalali calendar
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentDate = moment(currentDate).add(1, 'day');
    }

    // Push the last week
    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    console.log('Calendar:', weeks); // Log the calendar to see if it's populated correctly

    this.calendar = weeks;
  }

  getEmptyCells(count: number): any[] {
    return Array(count).fill(null);
  }
  nextmonth() {
    if (this.month == 11) {
      this.month = 0;
      this.year = this.year + 1;
    } else {
      this.month = this.month + 1;
    }
    this.jalaliCal();
  }
  prevmonth() {
    if (this.month == 0) {
      this.month = 11;
      this.year = this.year - 1;
    } else {
      this.month = this.month - 1;
    }
    this.jalaliCal();
  }
}
