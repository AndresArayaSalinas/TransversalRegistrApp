import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment'; // Ajusta la ruta según tu estructura de carpetas
import { RecuperarPage } from './recuperar.page';

describe('RecuperarPage', () => {
  let component: RecuperarPage;
  let fixture: ComponentFixture<RecuperarPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperarPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig), // Ajusta la configuración según tu entorno
        AngularFireAuthModule,
      ],
      providers: [ModalController, AngularDelegate],
    });

    fixture = TestBed.createComponent(RecuperarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});