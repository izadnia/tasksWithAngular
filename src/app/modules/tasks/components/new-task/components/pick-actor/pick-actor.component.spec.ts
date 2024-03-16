import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickActorComponent } from './pick-actor.component';

describe('PickActorComponent', () => {
  let component: PickActorComponent;
  let fixture: ComponentFixture<PickActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickActorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
