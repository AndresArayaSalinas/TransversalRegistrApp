import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  correito:string = "";
  constructor(private router:Router,
              private auth:AngularFireAuth,
              private helper:HelperService) { }

  ngOnInit() {
  }

  async restablecer() {
    // Muestra un loader para indicar que se está procesando la solicitud.
    const loader = await this.helper.showLoader("Cargando...");

    // Verifica si el campo del correo está vacío.
    if (this.correito.trim() === "") {
        // Si el campo está vacío, muestra una alerta al usuario.
        this.helper.showAlert("Campo correo vacío", "Debes ingresar un correo");
        
        // Cierra el loader ya que la operación ha finalizado.
        loader.dismiss();
        
        // Termina la ejecución de la función.
        return;
    }

    try {
        // Intenta enviar un correo de restablecimiento usando el servicio de autenticación.
        await this.auth.sendPasswordResetEmail(this.correito);
        
        // Si el correo se envía correctamente, informa al usuario con una alerta.
        this.helper.showAlert("Se envió un correo de restablecimiento. Revisa tu bandeja de entrada para restablecer tu contraseña.", "Enviado!");
        
        // Cierra el loader ya que la operación ha finalizado.
        loader.dismiss();
    } catch (error:any) {
      if (error.code == "auth/invalid-email") {
        this.helper.showAlert("El correo no es válido.","Advertencia");
      }else if(error.code == "auth/user-not-found"){
        this.helper.showAlert("El usuario ingresado no esta registrado.","Advertencia");
      }
              
        // Cierra el loader ya que la operación ha finalizado.
        loader.dismiss();
    }
}



}
