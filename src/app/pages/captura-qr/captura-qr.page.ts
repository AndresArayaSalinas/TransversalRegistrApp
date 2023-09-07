import { Component, ElementRef, ViewChildren, ViewChild } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-captura-qr',
  templateUrl: './captura-qr.page.html',
  styleUrls: ['./captura-qr.page.scss'],
})
export class CapturaQrPage {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController, private router:Router) {}


  aceptarQr(){
    var parametroQR = "QR123456";
    this.router.navigateByUrl(parametroQR+"/asistencia");
  }

  

  
}



 