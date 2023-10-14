import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { LectorQrPage } from 'src/app/modals/lector-qr/lector-qr.page';

 
@Component({
  selector: 'app-captura-qr',
  templateUrl: './captura-qr.page.html',
  styleUrls: ['./captura-qr.page.scss'],
})
export class CapturaQrPage {
  lectorQr:any='';
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController,
              private router:Router,
              private helper:HelperService) {}


  aceptarQr(){
    var parametroQR = "QR123456";
    this.router.navigateByUrl(parametroQR+"/asistencia");
  }

  async scan(){
    this.lectorQr  = (await BarcodeScanner.scan()).code;
    console.log("obj QR",JSON.parse(this.lectorQr));
    await this.modalResultQr();
  }

  async modalResultQr(){
    var qr = [];
    qr.push(this.lectorQr);
    const parametros={dataQr: this.lectorQr}
    await this.helper.showModal(LectorQrPage,parametros,false);
  }

  

  
}



 