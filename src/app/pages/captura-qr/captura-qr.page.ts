import { Component, ElementRef, ViewChild } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { AnimationController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { LectorQrPage } from 'src/app/modals/lector-qr/lector-qr.page';
import { AsistenciaStorageService } from 'src/app/services/asistencia-storage.service';
import { Asistencia } from 'src/app/models/asistencia';

@Component({
  selector: 'app-captura-qr',
  templateUrl: './captura-qr.page.html',
  styleUrls: ['./captura-qr.page.scss'],
})
export class CapturaQrPage {
  lectorQr: any = '';
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  constructor(private animationCtrl: AnimationController,
              private router: Router,
              private helper: HelperService,
              private asistenciaStorageService: AsistenciaStorageService) {}

  aceptarQr(){
    var parametroQR = "QR123456";
    this.router.navigateByUrl(parametroQR + "/asistencia");
  }
 
  async scan() {
    // sale el loader
    const loader = await this.helper.showLoader("Procesando...");

    try {
        this.lectorQr = (await BarcodeScanner.scan()).code;

        // Convertimos el contenido del codigo qr en un objeto
        const asistenciaObjeto: Asistencia = JSON.parse(this.lectorQr);
        
        // se intenta guardar el objeto de asistencia
        const seGuardo = await this.asistenciaStorageService.guardarAsistencia(asistenciaObjeto);

        // Cierra el loader
        loader.dismiss();

        if (!seGuardo) {
            // Si la asistencia ya existe, muestra una alerta
            this.helper.showAlert("Información duplicada", "Ya has registrado esta asistencia.");
            return;
        } 

        // sale una alerta indicando se guardo
        this.helper.showAlert("Éxito", "Asistencia registrada correctamente.");

        // Si no ocurren errores hasta aca se  muestra el modal
        await this.modalResultQr();

    } catch (error) {
        // se ccierra el loader en caso de error
        loader.dismiss();

        if (error instanceof SyntaxError) {
            this.helper.showAlert("Error", "El contenido del QR no es válido.");
        } else {
            this.helper.showAlert("Error", "Ocurrió un error al procesar el QR.");
        }
        console.error("Error al escanear o procesar el QR:", error);
    }
}





  
  async modalResultQr(){
    var qr = [];
    qr.push(this.lectorQr);
    const parametros = { dataQr: this.lectorQr };
    await this.helper.showModal(LectorQrPage, parametros, false);
  }
}
