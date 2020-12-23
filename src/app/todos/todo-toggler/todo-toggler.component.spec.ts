import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTogglerComponent } from './todo-toggler.component';

describe('TodoTogglerComponent', () => {
  let component: TodoTogglerComponent;
  let fixture: ComponentFixture<TodoTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTogglerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
