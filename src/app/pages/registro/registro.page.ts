import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  loading:boolean = true;
  constructor() { }

  cargandoRegistro = () => {
    this.loading = false;
  }

ngOnInit() {
 
  setTimeout(this.cargandoRegistro, 2000);
}
}
