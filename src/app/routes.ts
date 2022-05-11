import { RouterModule, Routes } from "@angular/router";
import { CinesComponent } from "./components/cines/cines.component";
import { ClientesAcmeComponent } from "./components/clientes-acme/clientes-acme.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { HomeComponent } from "./components/home/home.component";
import { LenguajesComponent } from "./components/lenguajes/lenguajes.component";

const ROUTES: Routes= [
  { path: '', redirectTo: '/clientes', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'lenguajes', component: LenguajesComponent},
  { path: 'clientes', component: ClientesComponent },
  { path: 'cines', component: CinesComponent },
  { path: 'clientesAcme', component: ClientesAcmeComponent}
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);