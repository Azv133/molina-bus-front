import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarchoferComponent } from './actualizarchofer.component';

describe('ActualizarchoferComponent', () => {
  let component: ActualizarchoferComponent;
  let fixture: ComponentFixture<ActualizarchoferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarchoferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarchoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
