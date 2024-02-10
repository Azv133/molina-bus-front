import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesGrafComponent } from './buses-graf.component';

describe('BusesGrafComponent', () => {
  let component: BusesGrafComponent;
  let fixture: ComponentFixture<BusesGrafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusesGrafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusesGrafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
