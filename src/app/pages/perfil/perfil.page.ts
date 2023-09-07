import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
correito:string = "";
  constructor(private router:Router) { }

  ngOnInit() {
  }

volver(){
  this.router.navigateByUrl("menu");


}

restablecer(){
 
  this.router.navigateByUrl("recuperar-contrasena");
}

}
