import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesRegComponent } from './clientes-reg.component';

describe('ClientesRegComponent', () => {
  let component: ClientesRegComponent;
  let fixture: ComponentFixture<ClientesRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientesRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
