import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-lenguajes',
  templateUrl: './lenguajes.component.html',
  styleUrls: ['./lenguajes.component.css']
})
export class LenguajesComponent implements OnInit {

  mostrar: boolean = true;
  listadoCursos: Curso[] = [
    {nombre: "Java", url:"/java"},
    {nombre: "Python", url:"/python"},
    {nombre: "JavaScript", url:"/javascript"},
    {nombre: "Angular", url:"angular"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setMostrar(){
    this.mostrar = !this.mostrar;
  }

}
