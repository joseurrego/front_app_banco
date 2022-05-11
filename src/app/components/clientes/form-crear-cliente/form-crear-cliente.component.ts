import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-crear-cliente',
  templateUrl: './form-crear-cliente.component.html',
  styleUrls: ['./form-crear-cliente.component.css']
})
export class FormCrearClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();

  constructor( private clienteService: ClienteService ,
    private router: Router,
    private activateRoute: ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

  crearCliente():void {
    this.clienteService.crearCliente(this.cliente).subscribe(
      (cliente) => {
        // Swal.fire("Cliente Creado" , cliente.nombre, 'success')
        this.router.navigate(['/home']);
        Swal.fire("Cliente Creado" , `Cliente Creado: ${cliente.nombre}`, 'success');
      }
    );
  }

}
