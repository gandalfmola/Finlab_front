import { Component, inject } from '@angular/core';
import { Iregistro } from 'src/app/interfaces/registro.interface';
import { DiarioService } from 'src/app/services/diario.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {

  arrRegistrosDiario!: Iregistro[];

  diarioService = inject(DiarioService)

  async ngOnInit() {
      const response = await this.diarioService.getSomeRegistros();
      console.log(response); 
  
      this.arrRegistrosDiario = response
      
    }


  async cargaBase() {

    this.diarioService.prueba("2024-03-15", "2024-03-25")       
    
  }
}
