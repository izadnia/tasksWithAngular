import { Component, OnInit } from '@angular/core';
import moment from 'jalali-moment'; // Importing Jalali-Moment correctly
import { CalendarService } from '../../../../services/calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor(private calendarService: CalendarService) {}

  calendar: any[][] = [];
  year: number = 0;
  monthName: string = '';

  ngOnInit(): void {
    this.jalaliCal();
  }
  jalaliCal() {
    this.calendarService.jalaliCal();
    this.calendar = this.calendarService.calendar;
    this.year = this.calendarService.year;
    this.monthName = this.calendarService.monthName;
  }
  monthTranslater() {}

  getEmptyCells(count: number): any[] {
    return Array(count).fill(null);
  }
  nextmonth() {
    this.calendarService.nextmonth();
    this.jalaliCal();
  }
  today() {
    this.calendarService.today();
    this.jalaliCal();
  }
  prevmonth() {
    this.calendarService.prevmonth();
    this.jalaliCal();
  }
}
