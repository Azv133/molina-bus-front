import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarbusComponent } from './actualizarbus.component';

describe('ActualizarbusComponent', () => {
  let component: ActualizarbusComponent;
  let fixture: ComponentFixture<ActualizarbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
