import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  //para especificar que tipo de servicio voy a consumir
  private headers = new HttpHeaders({
    'Content-type' : 'application/json'
  });
  
  // inyeccion de depencdencia, en este caso http, para utilizar los llamados (GET, PUT etc)
  constructor( private http: HttpClient ) { }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('https://demo9952806.mockable.io/clientes', { 
      headers: this.headers 
    })
  }

  crearCliente( cliente: Cliente ): Observable<Cliente>{
    return this.http.post<Cliente>('https://demo9952806.mockable.io/crearcliente',
      cliente,
      { headers: this.headers}
    )
  }
}
