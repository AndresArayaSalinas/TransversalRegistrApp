import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correito:string = "";
  password:string ="";

  constructor(private router:Router) { }

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
    
    if(this.correito == "asd" && this.password=="111"){
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


