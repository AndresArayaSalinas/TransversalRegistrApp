import { Component, NgZone, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})

export class InfoPage implements OnInit {
  deviceInfoJson: string = '';
  


  constructor( private zone: NgZone
  ) { }

  ngOnInit() {
  }


 async getDeviceInfo(){
  const info = await Device.getInfo();
    this.zone.run(() => {
    this.deviceInfoJson = JSON.stringify(info, null, 2);
    
    
  })
  

 }


}
