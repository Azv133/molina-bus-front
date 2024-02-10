import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusesMenuComponent } from './buses-menu.component';

describe('BusesMenuComponent', () => {
  let component: BusesMenuComponent;
  let fixture: ComponentFixture<BusesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
