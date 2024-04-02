import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Iregistro } from '../interfaces/registro.interface';
import { IregistroCorto } from '../interfaces/registro-corto.interface';

@Injectable({
  providedIn: 'root'
})
export class DestacadosService {

  httpClient = inject(HttpClient)

  // este método se trae las mayores subidas
  getBestSubidas() {
    return firstValueFrom(
      this.httpClient.get<Iregistro[]>("http://localhost:3000/api/destacados/subidas")
    )
  }

  // este método se trae las mayores bajadas
  getBestBajadas() {
    return firstValueFrom(
      this.httpClient.get<Iregistro[]>("http://localhost:3000/api/destacados/bajadas")
    )
  }

  // este método convierte un array de Iregistro en un array de IregistroCorto
    transformArray(arrIreg: Iregistro[], propiedad:IregistroCorto[]) {      

      for (let subida of arrIreg) {
        const nuevaSubida:IregistroCorto = {"fecha":"", "empresa":"", "variacion_porcentaje":0}
        nuevaSubida.fecha = subida.fecha
        nuevaSubida.empresa = subida.empresa;
        nuevaSubida.variacion_porcentaje = subida.variacion_porcentaje;
        // console.log(nuevaSubida);
        
        propiedad.push(nuevaSubida)
      }

      return propiedad

    }

}
