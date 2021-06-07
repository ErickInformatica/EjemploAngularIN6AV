import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasCiudadComponent } from './comidas-ciudad.component';

describe('ComidasCiudadComponent', () => {
  let component: ComidasCiudadComponent;
  let fixture: ComponentFixture<ComidasCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComidasCiudadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidasCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
