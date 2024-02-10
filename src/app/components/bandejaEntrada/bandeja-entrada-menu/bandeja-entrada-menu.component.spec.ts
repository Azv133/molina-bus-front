import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaEntradaMenuComponent } from './bandeja-entrada-menu.component';

describe('BandejaEntradaMenuComponent', () => {
  let component: BandejaEntradaMenuComponent;
  let fixture: ComponentFixture<BandejaEntradaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaEntradaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandejaEntradaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
