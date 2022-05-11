import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cine } from 'src/app/models/cine';

@Injectable({
  providedIn: 'root'
})
export class CineService {

  private headers = new HttpHeaders({
    'Content-type' : 'application/json'
  });

  constructor( private http: HttpClient ) { }

  getCines(): Observable<Cine[]> {
    return this.http.get<Cine[]>('https://demo9952806.mockable.io/cines',{
      headers: this.headers
    })
  }
}
