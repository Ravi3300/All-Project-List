import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipInputListComponent } from './chip-input-list.component';

describe('ChipInputListComponent', () => {
  let component: ChipInputListComponent;
  let fixture: ComponentFixture<ChipInputListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipInputListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
