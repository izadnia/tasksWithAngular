import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { PostProjectComponent } from './components/post-project/post-project.component';
import { ListsHandlersComponent } from './components/lists-handlers/lists-handlers.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    SingleProjectComponent,
    PostProjectComponent,
ListsHandlersComponent
    
  ],
  imports: [CommonModule, ProjectsRoutingModule,],
})
export class ProjectsModule {}
