import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficosMenuComponent } from './graficos-menu.component';

describe('GraficosMenuComponent', () => {
  let component: GraficosMenuComponent;
  let fixture: ComponentFixture<GraficosMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficosMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
