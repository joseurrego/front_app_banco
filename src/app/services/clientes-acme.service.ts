import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClienteAcme } from '../models/cliente-acme';

@Injectable({
  providedIn: 'root'
})
export class ClientesAcmeService {

  private headers = new HttpHeaders({
    'Content-type' : 'application/json'
  });

  private urlBase:string = environment.urlBaseServicioAcme;

  constructor( private http: HttpClient) { }

  getCliente( idCliente : string ): Observable<ClienteAcme> {
    return this.http.get<ClienteAcme>(`${this.urlBase}/Controller/consultarCliente?`
    +`idCliente=${idCliente}`,
    {headers: this.headers})
  }

  getClientes( ): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/Controller/consultarClientes',
    {headers: this.headers})
  }

  crearClienteAcme( cliente: ClienteAcme): Observable<ClienteAcme>{
    return this.http.post<ClienteAcme>('http://localhost:8080/Controller/crearCliente?'
    +'tipoIdentificacion='+cliente.tipoIdentificacion
    +'&numeroIdentificacion='+cliente.numeroIdentificacion
    +'&nombreCompleto='+cliente.nombreCompleto
    +'&fechaNacimiento='+cliente.fechaNacimiento,
    cliente,
    { headers: this.headers}
    )
  }
}
