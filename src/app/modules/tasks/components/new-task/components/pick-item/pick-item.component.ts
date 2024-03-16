import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Projects } from '../../../../../../models/Projects';
import { ProjectTestService } from '../../../../../../services/project-test.service';

@Component({
  selector: 'app-pick-item',
  templateUrl: './pick-item.component.html',
  styleUrl: './pick-item.component.scss',
  
})
export class PickItemComponent {
  constructor(private projectService : ProjectTestService) {
    
  }
  
  @Output() projectSelected = new EventEmitter<string>();
  selectedItem: string = "";
  projectListCanBeSelected : Projects[] = []

  ngOnInit(): void {

    this.projectService.getProjectsList().subscribe((m)=>{this.projectListCanBeSelected = m})
  }
  onFilterChange() {    
    this.projectSelected.emit(this.selectedItem);

  }
}
