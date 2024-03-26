import { Component } from '@angular/core';
import { Projects } from '../../models/Projects';
import { CalendarService } from '../../services/calendar.service';
import { ProjectTestService } from '../../services/project-test.service';

@Component({
  selector: 'app-calendar-template',
  templateUrl: './calendar-template.component.html',
  styleUrl: './calendar-template.component.scss',
})
export class CalendarTemplateComponent {
  constructor(
    private calendarService: CalendarService,
    private projectService: ProjectTestService
  ) {}
  projectsList: Projects[] = [];
  calendar: any[][] = [];
  year: number = 0;
  monthName: string = '';
  monthNum = 0
  modalIsOpen: boolean = false;
  dateFirst = ''
  dateSecond =''
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
  dateHandler(data:any,i:number,j:number){
    let temp = this.year+'/'+this.monthNum+'/'+ data.dayString
    if ((this.dateFirst == temp)||(this.dateFirst == temp && this.dateSecond == '')){
      this.dateFirst = ''
      delete this.calendar[i][j].firstDate
    }else if ((this.dateSecond == temp)||(this.dateSecond == temp && this.dateSecond == '')){
      this.dateSecond = ''
      delete this.calendar[i][j].secondDate 
    }else if(!this.dateFirst){
      this.dateFirst = temp
      this.calendar[i][j].firstDate = true
    }else if (!this.dateSecond){
      this.dateSecond = temp
      this.calendar[i][j].secondDate = true
    }
    console.log(this.calendar)
    console.log('1 :', this.dateFirst , '2 : ', this.dateSecond)
  }
  toggleModal(data: any) {
    if (data.events.length > 0) {
      this.modalIsOpen = true;
      this.modalFeed = data.events;
    }
  }
  closeModal() {
    this.modalIsOpen = !this.modalIsOpen;
  }

  jalaliCal() {
    this.calendarService.jalaliCal(this.projectsList);
    this.monthNum = this.calendarService.month + 1
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
