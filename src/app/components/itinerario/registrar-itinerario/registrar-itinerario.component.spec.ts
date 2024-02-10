import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarItinerarioComponent } from './registrar-itinerario.component';

describe('RegistrarItinerarioComponent', () => {
  let component: RegistrarItinerarioComponent;
  let fixture: ComponentFixture<RegistrarItinerarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarItinerarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarItinerarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
