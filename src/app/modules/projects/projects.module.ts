import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { SingleProjectComponent } from './components/single-project/single-project.component';
import { PostProjectComponent } from './components/post-project/post-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListsHandlersComponent } from './components/lists-handlers/lists-handlers.component';
import { PersianDatePipe } from './pipes/persian-date.pipe';
import { EditComponent } from './components/edit/edit.component';
import { NgPersianDatepickerModule } from 'ng-persian-datepicker';
import { CalendarTemplateComponent } from '../../components/calendar-template/calendar-template.component';
 

@NgModule({
  declarations: [
    ProjectsComponent,
    SingleProjectComponent,
    PostProjectComponent,
    ListsHandlersComponent,
    PersianDatePipe,
    EditComponent,
    CalendarTemplateComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgPersianDatepickerModule,
    
  ],
})
export class ProjectsModule {}
