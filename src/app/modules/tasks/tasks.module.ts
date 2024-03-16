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
import { NewTaskComponent } from './components/new-task/new-task.component';
import { PickItemComponent } from './components/new-task/components/pick-item/pick-item.component';
import { PickActorComponent } from './components/new-task/components/pick-actor/pick-actor.component';
import { DefineTaskComponent } from './components/new-task/components/define-task/define-task.component';


@NgModule({
  declarations: [
    TasksComponent,
    SingleTaskComponent,
    ListsHandlersComponent,
    EditComponent,
    PersianDatePipe,
    NewTaskComponent,
    PickItemComponent,
    PickActorComponent,
    DefineTaskComponent
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
