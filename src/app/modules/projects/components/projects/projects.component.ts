import { Component } from '@angular/core';
import { Projects } from '../../../../models/Projects';
import { ProjectTestService } from '../../../../services/project-test.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  constructor(private projectService: ProjectTestService) {}
  projectList: Projects[] = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.projectService.getProjectsList().subscribe((data) => {
      this.projectList = data;
    });
  }

  deleteProject(data: string) {
    let selectedProject = this.projectList.filter((m) => m.taskKey == data)[0]
      .title;
    if (
      confirm(
        '  آیا اطمینان دارید از حذف  ' +
          '"' +
          selectedProject +
          '"' +
          ' و تسک هایش از تمامی لیست ها    '
      )
    ) {
      this.projectService
        .deleteSingleProject(data)
        .subscribe((m) => (this.projectList = m));

      return alert(
        'پروژه ی ' +
          selectedProject +
          ' و تسک هایش از تمامی لیست ها حذف شدند   '
      );
    }
    return;
  }
}
