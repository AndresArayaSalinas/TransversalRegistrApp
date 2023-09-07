import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> c768f46dde1e485ea87f9c357aa4610ee511f062

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private router:Router) { }
>>>>>>> c768f46dde1e485ea87f9c357aa4610ee511f062

  ngOnInit() {
  }

<<<<<<< HEAD
=======

  volver(){
    this.router.navigateByUrl("menu");
  }


>>>>>>> c768f46dde1e485ea87f9c357aa4610ee511f062
}
