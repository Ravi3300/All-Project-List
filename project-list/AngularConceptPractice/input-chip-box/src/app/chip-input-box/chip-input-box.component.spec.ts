import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipInputBoxComponent } from './chip-input-box.component';

describe('ChipInputBoxComponent', () => {
  let component: ChipInputBoxComponent;
  let fixture: ComponentFixture<ChipInputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipInputBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChipInputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
