import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  volver(){
    this.router.navigateByUrl("menu");
  }


}
