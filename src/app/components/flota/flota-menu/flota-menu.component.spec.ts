import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlotaMenuComponent } from './flota-menu.component';

describe('FlotaMenuComponent', () => {
  let component: FlotaMenuComponent;
  let fixture: ComponentFixture<FlotaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlotaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlotaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
