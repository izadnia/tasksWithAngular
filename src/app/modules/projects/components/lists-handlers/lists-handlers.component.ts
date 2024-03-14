import { Conditional } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectTestService } from '../../../../services/project-test.service';
import { PersianDatePipe } from '../../../projects/pipes/persian-date.pipe';

@Component({
  selector: 'app-lists-handlers',
  templateUrl: './lists-handlers.component.html',
  styleUrl: './lists-handlers.component.scss',
})
export class ListsHandlersComponent {
  constructor(private projectService: ProjectTestService) {}
  @Input() incomeList: any[] = [];
  @Output() deletekeyEmitted = new EventEmitter<string>();

  translationMap: any = {
    id: 'شناسه',
    title: 'عنوان',
    initDate: 'تاریخ شروع',
    finishDate: 'تاریخ پایان',
    taskKey: 'اقدام',
    finish: 'وضعیت',
  };

  getColumnKeys(): string[] {
    if (this.incomeList.length === 0) {
      return [];
    }
    return Object.keys(this.translationMap);
  }
  formatDate(date: number | null): Date | null {
    if (date === null) {
      return null;
    }
    return new Date(date);
  }
  deleteProject(data : string){
    this.deletekeyEmitted.emit(data); 
  }
}
