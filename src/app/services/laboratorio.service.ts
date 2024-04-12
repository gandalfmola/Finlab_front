import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Iregistro } from '../interfaces/registro.interface';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  httpClient = inject(HttpClient)

  baseUrl = "http://localhost:3000/api"

  // este método va a traer los tramos de subida que cumplan las condiciones especificadas en el formulario
  getTramos(subida:number, lapso:number, beneficio:number) {
    return firstValueFrom(
      this.httpClient.get<Iregistro[]>(`${this.baseUrl}/laboratorio/seleccion/${subida}/${lapso}/${beneficio}`)
    )
  }




}
