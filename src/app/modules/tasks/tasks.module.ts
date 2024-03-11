import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { ListsHandlersComponent } from './components/lists-handlers/lists-handlers.component';


@NgModule({
  declarations: [
    TasksComponent,
    SingleTaskComponent,
    ListsHandlersComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
