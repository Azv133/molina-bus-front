import { TestBed } from '@angular/core/testing';

import { ItinerarioService } from './itinerario.service';

describe('ClienteService', () => {
  let service: ItinerarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItinerarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
