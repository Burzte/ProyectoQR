import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaDocenteComponent } from './detalle-asignatura-docente.component';

describe('DetalleAsignaturaDocenteComponent', () => {
  let component: DetalleAsignaturaDocenteComponent;
  let fixture: ComponentFixture<DetalleAsignaturaDocenteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignaturaDocenteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAsignaturaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
