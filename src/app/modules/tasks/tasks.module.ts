import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { ListsHandlersComponent } from './components/lists-handlers/lists-handlers.component';
import { EditComponent } from './components/edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersianDatePipe } from './pipes/persian-date.pipe';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';


@NgModule({
  declarations: [
    TasksComponent,
    SingleTaskComponent,
    ListsHandlersComponent,
    EditComponent,
    PersianDatePipe
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule,
    NgPersianDatepickerModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
