import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.page.html',
  styleUrls: ['./lector-qr.page.scss'],
})
export class LectorQrPage implements OnInit {
  @Input() dataQr:any;
  datoAsistencia:any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {
    console.log("data-Modal",JSON.parse(this.dataQr));
    this.datoAsistencia = JSON.parse(this.dataQr);
  }

  close(){
    this.modalController.dismiss();
  }

  registrarAsistencia(){
    
  }

}
