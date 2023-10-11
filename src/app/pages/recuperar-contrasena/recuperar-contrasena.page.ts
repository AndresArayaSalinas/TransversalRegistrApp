import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  correito:string = "";
  constructor(private router:Router,
              private auth:AngularFireAuth,
              private helperService:HelperService) { }

  ngOnInit() {
  }

  async restablecer() {
    // Verificar primero si el campo está vacío
    if (this.correito.trim() === "") {
        alert("Campo correo vacío. Debes ingresar un correo");
        return;
    }

    try {
        await this.auth.sendPasswordResetEmail(this.correito);
        console.log("Se envió un correo de restablecimiento");
    } catch (error) {
        console.log("Error encontrado: ");
    }
}

  }
  


