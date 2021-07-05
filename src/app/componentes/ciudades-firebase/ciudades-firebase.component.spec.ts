import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesFirebaseComponent } from './ciudades-firebase.component';

describe('CiudadesFirebaseComponent', () => {
  let component: CiudadesFirebaseComponent;
  let fixture: ComponentFixture<CiudadesFirebaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadesFirebaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
