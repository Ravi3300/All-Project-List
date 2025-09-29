import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListParentComponent } from './todo-list-parent.component';

describe('TodoListParentComponent', () => {
  let component: TodoListParentComponent;
  let fixture: ComponentFixture<TodoListParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
