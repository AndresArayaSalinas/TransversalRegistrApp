import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapturaQrPage } from './captura-qr.page';


describe('CapturaQrPage', () => {
  let component: CapturaQrPage;
  let fixture: ComponentFixture<CapturaQrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CapturaQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}

