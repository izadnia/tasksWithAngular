import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { SingleTaskComponent } from './components/single-task/single-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksModule } from './tasks.module';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
  },
  {
    path: ':id',
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
