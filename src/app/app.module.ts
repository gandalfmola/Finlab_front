import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DestacadoComponent } from './pages/destacado/destacado.component';
import { DiarioComponent } from './pages/diario/diario.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { LaboratorioComponent } from './pages/laboratorio/laboratorio.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroCardComponent } from './components/registro-card/registro-card.component';
import { RegistroListComponent } from './components/registro-list/registro-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DesplegableIntervaloComponent } from './components/desplegable-intervalo/desplegable-intervalo.component';
import { FormularioParametrosComponent } from './components/formulario-parametros/formulario-parametros.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubidaListComponent } from './components/subida-list/subida-list.component';
import { SubidaCardComponent } from './components/subida-card/subida-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    InicioComponent,
    DestacadoComponent,
    DiarioComponent,
    BuscadorComponent,
    LaboratorioComponent,
    FooterComponent,
    RegistroCardComponent,
    RegistroListComponent,
    DesplegableIntervaloComponent,
    FormularioParametrosComponent,
    SubidaListComponent,
    SubidaCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
