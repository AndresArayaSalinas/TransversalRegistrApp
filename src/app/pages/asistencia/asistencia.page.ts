import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { DatosQR } from 'src/app/models/datosQr';
import { Asistencia } from 'src/app/models/asistencia';
import { AsistenciaStorageService } from 'src/app/services/asistencia-storage.service';



@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  arrayAsistencia: DatosQR[] = [];
  asistencias : any;
  
  constructor(private router:Router,
              private asistenciaStorage:AsistenciaStorageService,
              private auth:AngularFireAuth) { }
  ngOnInit() {
    this.cargarAsistencia();
  }


  volver(){
    this.router.navigateByUrl("menu");
  }

  async cargarAsistencia() {
    try {
        this.arrayAsistencia = await this.asistenciaStorage.obtenerAsistencias();

        console.log('Asistencias cargadas:', this.arrayAsistencia);
    } catch (error) {
        console.error('Error al cargar las asistencias:', error);
    }
}

  
  
}