import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferesMenuComponent } from './choferes-menu.component';

describe('ChoferesMenuComponent', () => {
  let component: ChoferesMenuComponent;
  let fixture: ComponentFixture<ChoferesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoferesMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoferesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
