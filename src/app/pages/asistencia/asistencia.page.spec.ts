import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment'; // Ajusta la ruta según tu estructura de carpetas
import { AsistenciaPage } from './asistencia.page';

describe('AsistenciaPage', () => {
  let component: AsistenciaPage;
  let fixture: ComponentFixture<AsistenciaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenciaPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig), // Ajusta la configuración según tu entorno
        AngularFireAuthModule,
      ],
      providers: [ModalController, AngularDelegate],
    });

    fixture = TestBed.createComponent(AsistenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});