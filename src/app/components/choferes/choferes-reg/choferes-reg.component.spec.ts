import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferesRegComponent } from './choferes-reg.component';

describe('ChoferesRegComponent', () => {
  let component: ChoferesRegComponent;
  let fixture: ComponentFixture<ChoferesRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoferesRegComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoferesRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
