import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LenguajesComponent } from './components/lenguajes/lenguajes.component';

import { RouterModule , Routes } from '@angular/router';
import { APP_ROUTING } from './routes';
import { ClientesComponent } from './components/clientes/clientes.component';
import { HomeComponent } from './components/home/home.component';
import { TablaClientesComponent } from './components/tabla-clientes/tabla-clientes.component';
import { HttpClientModule } from '@angular/common/http';
import { CinesComponent } from './components/cines/cines.component';
import { TablaCinesComponent } from './components/tabla-cines/tabla-cines.component';
import { FormCrearClienteComponent } from './components/clientes/form-crear-cliente/form-crear-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesAcmeComponent } from './components/clientes-acme/clientes-acme.component';
import { TablaClientesAcmeComponent } from './components/clientes-acme/tabla-clientes-acme/tabla-clientes-acme.component';
import { FormCrearClienteAcmeComponent } from './components/clientes-acme/form-crear-cliente-acme/form-crear-cliente-acme.component';
import { ConsultaClienteComponent } from './components/clientes-acme/consulta-cliente/consulta-cliente.component';
import { ActualizacionClienteComponent } from './components/clientes-acme/actualizacion-cliente/actualizacion-cliente.component';
import { FormularioReactivoComponent } from './components/clientes-acme/formulario-reactivo/formulario-reactivo.component';

// const ROUTES: Routes = [
//   { path: '', redirectTo: '/clientes', pathMatch: 'full'},
//   { path: 'lenguajes', component: LenguajesComponent},
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LenguajesComponent,
    ClientesComponent,
    HomeComponent,
    TablaClientesComponent,
    CinesComponent,
    TablaCinesComponent,
    FormCrearClienteComponent,
    ClientesAcmeComponent,
    TablaClientesAcmeComponent,
    FormCrearClienteAcmeComponent,
    ConsultaClienteComponent,
    ActualizacionClienteComponent,
    FormularioReactivoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
