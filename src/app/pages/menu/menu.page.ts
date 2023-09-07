import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Menu } from 'src/app/models/menu';
import { HelperService } from 'src/app/services/helper.service';
import { RegistroAsistenciaPage } from '../registro-asistencia/registro-asistencia.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  private animation!: Animation;

  loading:boolean = true;
  arrayMenu:Menu[]=[];
  constructor(private router:Router,
              private helper:HelperService,
              private animationCtrl: AnimationController
    ) { }

    cargaMenu(){
      this.arrayMenu.push
      (
        {
          id:1,
          titulo:"Escaneo QR",
          icono:"qr-code-outline",
          url:"/captura-qr",
          
        },
        {
          id:2,
          titulo:"Mi Asistencia",
          icono:"calendar-outline",
          url:"/registro-asistencia"
        },
        {
          id:3,
          titulo:"Mi Perfil",
          icono:"person-outline",
          url:"/perfil"
        }              
      )
    }

    cargandoMenu = () => {
      this.loading = false;
    }

  ngOnInit() {
    this.cargaMenu();
    setTimeout(this.cargandoMenu, 2000);
  }

  async deslog(){
    var corfirmar = await this.helper.showConfirm("¿Estas seguro que deseas cerrar la sesión actual?","Confirmar","Cancelar")
    if (corfirmar == true) {
      this.router.navigateByUrl("login");
    }
  }

  escaneo(){
    this.router.navigateByUrl("captura-qr");
    this.animation.play();
  }
  asistencia(){
    
  }

  perfil(){
    this.router.navigateByUrl("registro-asistencia")
  }

  
}
