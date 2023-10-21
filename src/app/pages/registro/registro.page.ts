import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Region } from 'src/app/models/region';
import { Comunas } from 'src/app/models/comunas';
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
  telefono:string = "";
  regiones:Region[]=[];
  regionSel:number = 0;
  regionSelNomb:string="";
  comunas:Comunas[]=[]
  comunaSel:number = 0;
  comunaSelNomb:string="";
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
    if (!this.nombre) {
      
      this.helper.showToastError("Por favor, ingrese un nombre.", 3000);
      return; 
    }
    const loader = await this.helper.showLoader("Cargando");
    try {
      
      const request = await this.auth.createUserWithEmailAndPassword(this.email,this.contrasena);
      this.comunaSelNomb = this.comunas.filter(e => e.id == this.comunaSel)[0].nombre;
      this.regionSelNomb = this.regiones.filter(e => e.id == this.regionSel)[0].nombre;
      var user = 
      [
        {
          nombre:this.nombre,
          apellidoPaterno:this.apellidoPaterno,
          apellidoMaterno:this.apellidoMaterno,
          email:this.email,
          telefono:this.telefono,
          comuna:this.comunaSelNomb,
          region:this.regionSelNomb

        }
    ];
      this.storageService.guardarUsuario(user);

      await this.router.navigateByUrl('login');
      await loader.dismiss();
     
      
      this.helper.showToast("El Usuario fue registrado correctamente", 3000);
      

    } catch (error:any) {
      await loader.dismiss();
      if (error.code == 'auth/email-already-in-use') {
        await this.helper.showAlert("El correo ingresado ya se encuentra en uso","Información");
      }else if (error.code == "auth/invalid-email") {
        await this.helper.showAlert("El correo ingresado no es válido","Información");
      }else if (error.code == "auth/missing-password") {
        await this.helper.showAlert("El campo contraseña no puede estar vacio","Información");
      }else if(error.code == "auth/weak-password"){
        await this.helper.showAlert("La contraseña debe tener al menos 6 caracteres","Información");
      }
    }
  }


  cargandoRegistro = () => {
    this.loading = false;
  }



}
