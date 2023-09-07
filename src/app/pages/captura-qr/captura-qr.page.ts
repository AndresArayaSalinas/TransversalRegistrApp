import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-captura-qr',
  templateUrl: './captura-qr.page.html',
  styleUrls: ['./captura-qr.page.scss'],
})
export class CapturaQrPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  aceptarQr(){
    this.router.navigateByUrl("asistencia");
  }

}
