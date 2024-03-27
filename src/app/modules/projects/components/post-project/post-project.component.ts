import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { format, monthsToYears } from 'date-fns';
import { Projects } from '../../../../models/Projects';
import { CalendarService } from '../../../../services/calendar.service';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-post-project',
  templateUrl: './post-project.component.html',
  styleUrl: './post-project.component.scss',
})
export class PostProjectComponent {
  constructor(
    private calendarService : CalendarService,
    private projectService: ProjectTestService,
    private router: Router
  ) {}
  dateFirst = ''
  dateSecond = ''
  ngOnInit(): void {
  }
  item: Projects = new Projects();
  initDateValue = new FormControl();
  finishDateValue = new FormControl();
  productModel: any;
  titleCheckFlag: boolean = true;
  initDateCheckFlag: boolean = true;
  finishDateCheckFlag: boolean = true;
  readyToSend = false;
  showModal = false;
  handleFirstDate(date:any){
    this.dateFirst = date;
    this.item.initDate = this.dateFirst
  }
  handleSecondDate(date:any){
    this.dateSecond = date;
    this.item.finishDate = this.dateSecond
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  flagCheck() {
    if (
      !this.initDateCheckFlag ||
      !this.finishDateCheckFlag ||
      !this.titleCheckFlag
    ) {
      this.readyToSend = false;
    }
    this.item.initDate == ''
      ? (this.initDateCheckFlag = false)
      : (this.initDateCheckFlag = true);

    this.item.finishDate == ''
      ? (this.finishDateCheckFlag = false)
      : (this.finishDateCheckFlag = true);

    this.item.title == ''
      ? (this.titleCheckFlag = false)
      : (this.titleCheckFlag = true);

    if (
      this.initDateCheckFlag &&
      this.finishDateCheckFlag &&
      this.titleCheckFlag
    ) {
      this.readyToSend = true;
    }
    return;
  }
routToProject(){
  this.router.navigate(['projects'])
}
  onSubmit() {
    this.flagCheck();
    if (this.readyToSend) {
      
      this.projectService.setNewProject(this.item).subscribe((Response) => {
        if (Response.title == this.item.title) {
          this.toggleModal();
          this.item = new Projects();
        } else alert('یه مشکلی پیش اومد');
      });
    
    } else {
      this.toggleModal();
    }
  }
}
