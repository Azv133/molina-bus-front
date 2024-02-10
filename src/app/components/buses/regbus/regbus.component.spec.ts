import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegbusComponent } from './regbus.component';

describe('RegbusComponent', () => {
  let component: RegbusComponent;
  let fixture: ComponentFixture<RegbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
