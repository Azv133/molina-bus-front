import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItinerarioTablaComponent } from './itinerario-tabla.component';

describe('ItinerarioTablaComponent', () => {
  let component: ItinerarioTablaComponent;
  let fixture: ComponentFixture<ItinerarioTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItinerarioTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItinerarioTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
