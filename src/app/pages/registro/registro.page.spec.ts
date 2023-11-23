import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment'; // Ajusta la ruta según tu estructura de carpetas
import { RegistroPage } from './registro.page';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig), // Ajusta la configuración según tu entorno
        AngularFireAuthModule,
      ],
      providers: [ModalController, AngularDelegate, HttpClient, HttpHandler],
    });

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});