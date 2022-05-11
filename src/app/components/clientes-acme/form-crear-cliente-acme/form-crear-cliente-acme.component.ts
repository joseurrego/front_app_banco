import { Component, OnInit } from '@angular/core';
import { ClienteAcme } from 'src/app/models/cliente-acme';
import { ClientesAcmeService } from 'src/app/services/clientes-acme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-crear-cliente-acme',
  templateUrl: './form-crear-cliente-acme.component.html',
  styleUrls: ['./form-crear-cliente-acme.component.css']
})
export class FormCrearClienteAcmeComponent implements OnInit {

  cliente: ClienteAcme = new ClienteAcme();

  constructor( private clienteAcmeService: ClientesAcmeService ,
  ) { }

  ngOnInit(): void {
  }

  crearCliente():void {
    this.clienteAcmeService.crearClienteAcme(this.cliente).subscribe(
      (cliente: any) => {
        // Swal.fire("Cliente Creado" , cliente.nombre, 'success')
        Swal.fire("Cliente Creado" , `Cliente Creado: ${cliente.strNombreCompleto}`, 'success');
      }
    );
  }

}
