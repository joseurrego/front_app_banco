import { Component, OnInit } from '@angular/core';
import { ClientesAcmeService } from 'src/app/services/clientes-acme.service';

@Component({
  selector: 'app-tabla-clientes-acme',
  templateUrl: './tabla-clientes-acme.component.html',
  styleUrls: ['./tabla-clientes-acme.component.css']
})
export class TablaClientesAcmeComponent implements OnInit {

  listadoClientesAcme: any[] = []

  constructor( private clienteAcmeService: ClientesAcmeService) { }

  ngOnInit(): void {
    this.getClientesAcme();
  }

  getClientesAcme(){
    this.clienteAcmeService.getClientes().subscribe(
      (clientes) => this.listadoClientesAcme = clientes
    )
  }

}
