import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CapturaQrPage } from './captura-qr.page';

describe('CapturaQrPage', () => {
  let component: CapturaQrPage;
  let fixture: ComponentFixture<CapturaQrPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapturaQrPage],
      imports: [
        IonicModule.forRoot(),
        AngularFireModule.initializeApp(environment.firebaseConfig), 
        AngularFireAuthModule,
      ],
      providers: [ModalController, AngularDelegate],
    });

    fixture = TestBed.createComponent(CapturaQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});