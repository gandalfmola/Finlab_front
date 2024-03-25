import { Component, inject } from '@angular/core';
import { DiarioService } from 'src/app/services/diario.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {

  diarioService = inject(DiarioService)


  async cargaBase() {

    this.diarioService.prueba("2024-03-15", "2024-03-19")       
    
  }
}
