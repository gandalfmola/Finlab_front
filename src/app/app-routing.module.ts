import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DiarioComponent } from './pages/diario/diario.component';
import { DestacadoComponent } from './pages/destacado/destacado.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';

const routes: Routes = [
  { path: "", component: InicioComponent},
  { path: "inicio", component: InicioComponent},
  { path: "destacado", component: DestacadoComponent},
  { path: "diario", component: DiarioComponent},
  { path: "buscador", component: BuscadorComponent},
  { path: "laboratorio", component: LaboratorioComponent},
  { path: "**", redirectTo: "inicio"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
