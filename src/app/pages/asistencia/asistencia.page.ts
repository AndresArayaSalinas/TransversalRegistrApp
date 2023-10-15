import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatosQR } from 'src/app/models/datosQr';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {
  arrayAsistencia: DatosQR[] = [];
  constructor(private router:Router) { }
  ngOnInit() {
    this.cargarAsistencia();
  }


  volver(){
    this.router.navigateByUrl("menu");
  }

  cargarAsistencia() {
    const datosActuales: DatosQR[] = JSON.parse(localStorage.getItem('datosQRArray') || '[]');
    
    if (datosActuales.length > 0) {
      this.arrayAsistencia = datosActuales;
    } else {
      console.error("No se encontraron datos en localStorage");
    }
  }
  
}