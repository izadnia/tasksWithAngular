import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarMainComponent } from './components/calendar-main/calendar-main.component';
import { CalendarComponent } from './components/calender/calendar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    CalendarMainComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule,
  ]
})
export class CalendarModule { }
