import { TestBed } from '@angular/core/testing';
import { LocationService } from './location.service';
import { HelperService } from './helper.service';
import { AngularDelegate, ModalController } from '@ionic/angular';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HelperService,ModalController,AngularDelegate,HttpClient,HttpHandler]
    });
    service = TestBed.inject(LocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
