import { Component, OnInit } from '@angular/core';
import { CineService } from 'src/app/services/cine.service';
import { Cine } from 'src/app/models/cine';

@Component({
  selector: 'app-tabla-cines',
  templateUrl: './tabla-cines.component.html',
  styleUrls: ['./tabla-cines.component.css']
})
export class TablaCinesComponent implements OnInit {

  listadoCines: Cine[] = []

  constructor( private cineService: CineService ) { }

  ngOnInit(): void {
    this.getCines();
  }

  getCines(){
    this.cineService.getCines().subscribe( (response: Cine[]) => {
      this.listadoCines =response
    })
  }



}
