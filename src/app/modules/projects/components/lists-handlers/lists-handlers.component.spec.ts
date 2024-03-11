import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsHandlersComponent } from './lists-handlers.component';

describe('ListsHandlersComponent', () => {
  let component: ListsHandlersComponent;
  let fixture: ComponentFixture<ListsHandlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListsHandlersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListsHandlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
