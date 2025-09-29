import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListChildComponent } from './todo-list-child.component';

describe('TodoListChildComponent', () => {
  let component: TodoListChildComponent;
  let fixture: ComponentFixture<TodoListChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
