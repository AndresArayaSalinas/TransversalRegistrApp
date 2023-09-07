import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> c768f46dde1e485ea87f9c357aa4610ee511f062

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

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
