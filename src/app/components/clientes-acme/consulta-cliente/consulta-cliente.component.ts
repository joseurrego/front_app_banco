import { Component, OnInit } from '@angular/core';
import { ClienteAcme } from 'src/app/models/cliente-acme';
import { ClientesAcmeService } from 'src/app/services/clientes-acme.service';

@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {

  cliente:ClienteAcme = new ClienteAcme();
  idCliente: string = "";

  constructor( private clienteAcmeService: ClientesAcmeService) { }

  ngOnInit(): void {
  }

  getCliente(){
    this.clienteAcmeService.getCliente(this.idCliente).subscribe(
      (cliente) => {
        this.cliente = cliente;
        console.log(cliente);
      }
    )
  }

}
