import { Component, OnInit } from '@angular/core';
import moment from 'jalali-moment'; // Importing Jalali-Moment correctly
import { Projects } from '../../../../models/Projects';
import { CalendarService } from '../../../../services/calendar.service';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  constructor(
    private calendarService: CalendarService,
    private projectService: ProjectTestService
  ) {}
  projectsList: Projects[] = [];
  calendar: any[][] = [];
  year: number = 0;
  monthName: string = '';
  modalIsOpen: boolean = false;
  modalFeed: Projects[] = [
    {
      id: 0,
      title: '',
      initDate: '',
      finishDate: '',
      taskKey: '',
      finish: false,
    },
  ];

  ngOnInit(): void {
    this.projectService
      .getProjectsList()
      .subscribe((m) => (this.projectsList = m));
    this.jalaliCal();

  }
  toggleModal(data: any) {
    if (data.length > 0) {
      this.modalIsOpen = true;
      this.modalFeed = data;
    } else {
      this.modalIsOpen = false;
      this.modalFeed = [
        {
          id: 0,
          title: '',
          initDate: '',
          finishDate: '',
          taskKey: '',
          finish: false,
        },
      ];
    }
  }

  jalaliCal() {
    this.calendarService.jalaliCal(this.projectsList);
    this.calendar = this.calendarService.calendar;
    this.year = this.calendarService.year;
    this.monthName = this.calendarService.monthName;
  }
  monthTranslater() {}

  getEmptyCells(count: number): any[] {
    return Array(count).fill(null);
  }
  nextmonth() {
    this.calendarService.nextmonth(this.projectsList);
    this.jalaliCal();
  }
  today() {
    this.calendarService.today(this.projectsList);
    this.jalaliCal();
  }
  prevmonth() {
    this.calendarService.prevmonth(this.projectsList);
    this.jalaliCal();
  }
}
