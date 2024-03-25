import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Iregistro } from '../interfaces/registro.interface';

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

}
