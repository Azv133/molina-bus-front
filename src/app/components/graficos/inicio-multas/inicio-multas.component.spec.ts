import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMultasComponent } from './inicio-multas.component';

describe('InicioMultasComponent', () => {
  let component: InicioMultasComponent;
  let fixture: ComponentFixture<InicioMultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioMultasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioMultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
