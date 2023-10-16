import { Component, ElementRef, ViewChild } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
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
  lectorQr: any = '';
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  constructor(private animationCtrl: AnimationController,
              private router: Router,
              private helper: HelperService) {}

  aceptarQr(){
    var parametroQR = "QR123456";
    this.router.navigateByUrl(parametroQR + "/asistencia");
  }

  async scan() {
    // Muestra el loader
    const loader = await this.helper.showLoader("Cargando...");
  
    try {
      this.lectorQr = (await BarcodeScanner.scan()).code;
  
      // Parseamos el contenido del QR
      const objetoJSON = JSON.parse(this.lectorQr);
  
      // Obtenemos el array actual de datos desde localStorage
      const datosActuales: any[] = JSON.parse(localStorage.getItem('datosQRArray') || '[]');
      
      // Verificamos si el objeto ya existe en el array basándonos en el campo `asignatura`
      const yaExiste = datosActuales.some(dato => dato.asignatura === objetoJSON.asignatura);
      
      if (yaExiste) {
          // Mostramos una alerta indicando que el QR ya ha sido agregado.
          this.helper.showAlert("Información duplicada", "No puedes registrar la misma asignatura.");
      } else {
        // Si no existe, agregamos el nuevo dato al array
        datosActuales.push(objetoJSON);
        
        // Guardamos el array actualizado en localStorage
        localStorage.setItem('datosQRArray', JSON.stringify(datosActuales));
      }

      // Si no ocurren errores hasta aquí, cierra el loader
      loader.dismiss();

      console.log("obj QR", objetoJSON);
      await this.modalResultQr();
    
    } catch (error) {
      // Si hay un error, también cierra el loader
      loader.dismiss();
  
      // Si el error es al parsear el JSON, muestra un mensaje específico
      if (error instanceof Error) {
        this.helper.showAlert("Error al escanear o procesar el QR", error.message);
      } else {
        this.helper.showAlert("Error al escanear o procesar el QR", "Ocurrió un error desconocido");
      }
    }
}


  
  async modalResultQr(){
    var qr = [];
    qr.push(this.lectorQr);
    const parametros = { dataQr: this.lectorQr };
    await this.helper.showModal(LectorQrPage, parametros, false);
  }
}
