import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleAsignaturaAlumnoComponent } from './detalle-asignatura-alumno.component';

describe('DetalleAsignaturaAlumnoComponent', () => {
  let component: DetalleAsignaturaAlumnoComponent;
  let fixture: ComponentFixture<DetalleAsignaturaAlumnoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAsignaturaAlumnoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleAsignaturaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
