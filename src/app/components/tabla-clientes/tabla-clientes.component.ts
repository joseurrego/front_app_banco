import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-tabla-clientes',
  templateUrl: './tabla-clientes.component.html',
  styleUrls: ['./tabla-clientes.component.css'],
})
export class TablaClientesComponent implements OnInit {
  listadoClientes: Cliente[] = [
    {
      id: 1,
      nombre: 'Jose',
      apellido: 'Urrego',
      email: 'joseurrego@cbit-online.com',
      createAt: new Date('08/07/2020'),
    },
    {
      id: 2,
      nombre: 'Luis',
      apellido: 'Urrego',
      email: 'luisurrego@cbit-online.com',
      createAt: new Date('10/24/2017'),
    },
    {
      id: 3,
      nombre: 'Dayana',
      apellido: 'Ramirez',
      email: 'dayanaramirez@cbit-online.com',
      createAt: new Date('10/24/2017'),
    },
    {
      id: 4,
      nombre: 'Mauricio',
      apellido: 'Castaño',
      email: 'mauriciocastaño@cbit-online.com',
      createAt: new Date('10/24/2017'),
    },
  ];

  listadoClientes2: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientesV2();
  }

  getClientes() {
    // Siempre debe suscribirse al servicio para que funcione
    this.clienteService.getClientes().subscribe((response: Cliente[]) => {
      this.listadoClientes2 = response;
      console.log(this.listadoClientes2);
    });
  }

  getClientesV2() {
    this.clienteService
      .getClientes()
      .subscribe((clientes) => (this.listadoClientes2 = clientes));
  }
}
