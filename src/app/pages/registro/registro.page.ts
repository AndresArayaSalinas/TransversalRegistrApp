import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region';
import { Usuario } from 'src/app/models/usuario';
import { HelperService } from 'src/app/services/helper.service';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre:string = "";
  apellidoPaterno:string = "";
  apellidoMaterno:string = "";
  contrasena:string = "";
  email:string = "";
  telefono:number = 0;

  regiones:Region[]=[];
  comunas:any[]=[];
  regionSel:number = 0;
  comunaSel:number = 0;
  loading:boolean = true;

  
  constructor(
              private auth:AngularFireAuth,
              private helper:HelperService,
              private router:Router,
              private storageService:StorageService,
              private locationService:LocationService
              ) { }

  ngOnInit() {
    this.userView();
    this.cargarRegion();
    setTimeout(this.cargandoRegistro, 2000);

    
  }


  async cargarComuna(){
    try {
      const req = await this.locationService.getComuna(this.regionSel);
      this.comunas = req.data;
    } catch (error:any) {
      console.log("ERROR", error);
      
      this.helper.showAlert(error.error.msg,"Error")
    }
  }

  async cargarRegion(){
    try {
      const req = await this.locationService.getRegion();
      this.regiones = req.data;
      console.log("REGIONES",this.regiones);
    } catch (error) {
      
    }
  }

  async userView(){
    console.log("USUARIOS STORAGE",await this.storageService.obtenerUsuario());
  }


  async registro(){
    const loader = await this.helper.showLoader("Cargando");
    try {
      const request = await this.auth.createUserWithEmailAndPassword(this.email,this.contrasena);
      var user = 
      [
        {
          nombre:this.nombre,
          apellidoPaterno:this.apellidoPaterno,
          apellidoMaterno:this.apellidoMaterno,
          email:this.email,
          telefono:this.telefono

        }
    ]
      this.storageService.guardarUsuario(user);

      await this.router.navigateByUrl('login');
      await loader.dismiss();
      await this.helper.showAlert("Usuario registrado correctamente", "Información");

    } catch (error:any) {
      if (error.code == 'auth/invalid-email') {
        await this.helper.showAlert("El formato del correo no es valido.","Error de validación");
        await loader.dismiss();
      }
    }
  }


  cargandoRegistro = () => {
    this.loading = false;
  }



}
