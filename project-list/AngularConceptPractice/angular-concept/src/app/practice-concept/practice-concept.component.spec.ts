import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeConceptComponent } from './practice-concept.component';

describe('PracticeConceptComponent', () => {
  let component: PracticeConceptComponent;
  let fixture: ComponentFixture<PracticeConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeConceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
