import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-contrasena',
  templateUrl: './recuperar-contrasena.page.html',
  styleUrls: ['./recuperar-contrasena.page.scss'],
})
export class RecuperarContrasenaPage implements OnInit {

  correito:string = "";
  constructor(private router:Router) { }

  ngOnInit() {
  }

  restablecer(){
    if(this.correito==""){
      alert("Campo correo vacio. Debes ingresar un correo");
      return;
    }
    this.router.navigateByUrl("restablecer");
  }

}
