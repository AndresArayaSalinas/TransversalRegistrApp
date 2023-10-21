import { Injectable } from '@angular/core';
import { Asistencia } from '../models/asistencia';
import { Preferences } from '@capacitor/preferences';

const storageAsistencia = 'asistenciaData';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaStorageService {

  constructor() { }

  async getItem(llave:string):Promise<string | null >{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async setItem(llave:string,valor:string){
    await Preferences.set({key:llave,value:valor});

  }

  async obtenerAsistencias():Promise<Asistencia[]>{
    const storageData = await this.getItem(storageAsistencia);
    if (storageData == null)
    {
      return[];
    }

    const data:any[] = JSON.parse(storageData);
    if (data)
    {
      return data;
    }
    else
    {
      return [];
    }
  }

  async guardarAsistencia(asistenciaNueva: Asistencia): Promise<boolean> {
    const asistenciasActuales = await this.obtenerAsistencias();

    // Verifica si la asistencia ya existe
    const yaExiste = asistenciasActuales.some(
        asistencia => asistencia.asignatura === asistenciaNueva.asignatura && asistencia.fecha === asistenciaNueva.fecha
    );

    if (yaExiste) {
        return false; // aca sale que la asistencia no se guardo porque ya existe en el storage
    }

    asistenciasActuales.push(asistenciaNueva);
    await this.setItem(storageAsistencia, JSON.stringify(asistenciasActuales));

    return true; // Indica que la asistencia se guardo con éxito
}


}
