import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correito:string = "";
  password:string ="";

  constructor(private router:Router,
              private animationCtrl: AnimationController
              ) { }

  ngOnInit() {
  }

  logear(){
    if(this.correito==""){
      alert("Campo correo vacio. Debes ingresar un correo");
      return;
    }
    if(this.password==""){
      alert("Debes de ingresar una contraseña.")
      return;
    }
    
    if(this.correito == "pgy4121-002d" && this.password=="pgy4121-002d"){
      this.router.navigateByUrl("menu");
    }else{
      alert("Datos ingresados no validos.")
    }
  }

  registrarse(){
    this.router.navigateByUrl("registro");
  }

  recuperar(){
    this.router.navigateByUrl("recuperar");
  }

}


