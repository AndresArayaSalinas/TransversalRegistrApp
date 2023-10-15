import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

usuario:any;
nombreUsuario:string = "";
  constructor(private router:Router,
              private storage:StorageService,
              private auth:AngularFireAuth) { }

ngOnInit() {
  this.cargarUsuario();
  }

volver(){
  this.router.navigateByUrl("menu");


}

restablecer(){
 
  this.router.navigateByUrl("recuperar");
}

async cargarUsuario(){
  console.log("USUARIO STORAGE",await this.storage.obtenerUsuario());
  console.log("PROPIEDAD SERVICE STORAGE",this.storage.usuarioCorreo);

  var user = await this.auth.currentUser;
  console.log("usuario actual: ",user?.email);  

  this.usuario = (await this.storage.obtenerUsuario()).filter(e => e.email == user?.email);
  this.nombreUsuario =  this.usuario[0].nombre;
  
}


}
