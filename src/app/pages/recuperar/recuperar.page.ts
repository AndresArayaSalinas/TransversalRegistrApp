import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

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
