import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioMenuComponent } from './itinerario-menu.component';

describe('ItinerarioMenuComponent', () => {
  let component: ItinerarioMenuComponent;
  let fixture: ComponentFixture<ItinerarioMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItinerarioMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItinerarioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
