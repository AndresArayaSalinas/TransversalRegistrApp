import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correito:string = "";
  password:string ="";

  constructor(private router:Router,
              private animationCtrl: AnimationController,
              private auth:AngularFireAuth,
              private helperService:HelperService
              ) { }

  ngOnInit() {
  }
  


  async logear(){
    if (this.password == "" && this.correito == "") {
      this.helperService.showAlert("Campos vacíos", "Advertencia");
      return;
    }
    if (this.correito == "") {
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    }
    if (this.password == "") {
      this.helperService.showAlert("Debe ingresar una contraseña", "Advertencia");
      return;
    }
  
    const loader = await this.helperService.showLoader("Cargando...");
  
    try {
      const req = await this.auth.signInWithEmailAndPassword(this.correito, this.password);
      console.log("TOKEN", await req.user?.getIdToken());
      await loader.dismiss(); // Cerramos el loader antes de cambiar de vista.
      await this.router.navigateByUrl("menu");
      this.helperService.showToast("Sesión iniciada correctamente!", 3000);
    } catch (error:any) {
      if (error.code == "auth/invalid-email") {
        this.helperService.showAlert("El correo no es válido.", "Advertencia");
      } else if (error.code == "auth/missing-password") {
        this.helperService.showAlert("Campo de contraseña vacío.", "Advertencia");
      } else if (error.code == "auth/user-not-found") {
        this.helperService.showAlert("El usuario ingresado no está registrado.", "Advertencia");
      }else if (error.code == "auth/wrong-password") {
        this.helperService.showAlert("La clave ingresada no es correcta.", "Advertencia");
      }
       else {
        
        // otros errores que  no estana arriba
        this.helperService.showAlert("Error al iniciar sesión", "Por favor, intente nuevamente más tarde.");
      }
    } finally {
      // Asegurarse de que el loader siempre se cierre
      loader.dismiss();
    }
  }
  

  registrarse(){
    
    this.router.navigateByUrl("/registro");

  }

  recuperar(){
    this.router.navigateByUrl("/recuperar");

  }

}


