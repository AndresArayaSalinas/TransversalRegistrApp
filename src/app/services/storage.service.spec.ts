import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { HelperService } from './helper.service';
import { AngularDelegate } from '@ionic/angular';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[HelperService,AngularDelegate,StorageService]
    });
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
