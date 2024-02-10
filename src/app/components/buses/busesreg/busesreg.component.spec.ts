import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesregComponent } from './busesreg.component';

describe('BusesregComponent', () => {
  let component: BusesregComponent;
  let fixture: ComponentFixture<BusesregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusesregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusesregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
