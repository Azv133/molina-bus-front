import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarItinerarioComponent } from './actualizar-itinerario.component';

describe('ActualizarItinerarioComponent', () => {
  let component: ActualizarItinerarioComponent;
  let fixture: ComponentFixture<ActualizarItinerarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarItinerarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
