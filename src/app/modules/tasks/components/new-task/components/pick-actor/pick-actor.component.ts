import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pick-actor',
  templateUrl: './pick-actor.component.html',
  styleUrl: './pick-actor.component.scss'
})
export class PickActorComponent {

  @Output() actorSelected = new EventEmitter<string>();
  selectedActor : string = ''

  onFilterChange(){
    this.actorSelected.emit(this.selectedActor)
  }
}
