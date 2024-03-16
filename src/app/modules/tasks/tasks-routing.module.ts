import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { DefineTaskComponent } from './components/new-task/components/define-task/define-task.component';
import { PickActorComponent } from './components/new-task/components/pick-actor/pick-actor.component';
import { PickItemComponent } from './components/new-task/components/pick-item/pick-item.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksModule } from './tasks.module';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  }, 
  {
    path:'new-task',
    component:NewTaskComponent,
  },
  {
    path: 'task/:id',
    component: SingleTaskComponent,
  },  
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
