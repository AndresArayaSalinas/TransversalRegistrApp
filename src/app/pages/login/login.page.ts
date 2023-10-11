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
  
//usuario@usuario.cl
//123123

async logear(){
  if (this.correito == "") {
    //alert("Debe ingresar un email.");
    this.helperService.showAlert("Debe ingresar un email", "Advertencia");
    return;
  }
  if (this.password == "") {
    alert("Debe ingresar una contraseña.")
    return;
  }
  
  try {
    const req = await this.auth.signInWithEmailAndPassword(this.correito,this.password);
    console.log("TOKEN", await req.user?.getIdToken());
    await this.router.navigateByUrl("menu");
    this.helperService.showToast("Sesión iniciada correctamente!", 3000);
  } catch (error:any) {
    if(error.code == 'auth/wrong-password'){
      this.helperService.showAlert("Contraseña incorrecta, inténtelo nuevamente.", "Oh no!");
    }
   
    
    
  }    
}

  registrarse(){
    
    this.router.navigateByUrl("/registro");

  }

  recuperar(){
    this.router.navigateByUrl("/recuperar");

  }

}


