import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostProjectComponent } from './components/post-project/post-project.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
  },
  {
    path: 'new-project',
    component: PostProjectComponent,
  },
  {
    path:'edit/:id',
    component:PostProjectComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
