import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  private cliente:Cliente = {
    id:1, nombre:"jose", apellido:"urrego", email:"joseurrego@email.com", createAt:new Date("2022-05-20")};

  public formulario: FormGroup;

  public apellidoLeido: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.armarFormulario();
  }

  private armarFormulario(){
    // forma para llenar el formulario
    this.formulario = new FormGroup({
      nombre: new FormControl(this.cliente.nombre, [Validators.required, Validators.minLength(5)]),
      apellido: new FormControl(this.cliente.apellido, [Validators.required]),
      email: new FormControl(this.cliente.email, [Validators.required])
    })
  }

  public capturar(){
    // console.log(this.formulario.value)
    this.formulario.get('apellido').enable();
    this.formulario.get('email').enable();
    if (this.formulario.valid) {
      console.log(this.formulario);
      console.log(this.formulario.value);
    }else{
      console.log("mal")
    }
    this.formulario.patchValue({
      nombre:"",
      apellido: "",
      email: ""
    })
  }

  public capturarDato(){
    if (this.formulario.value.nombre == "jose1") {
      this.formulario.patchValue({
        apellido: "urrego",
        email: "urregojoseluis26@gmail.com"
      })
      // this.formulario.get('apellido').disable();
      this.apellidoLeido = true;
      this.formulario.get('email').disable();
    }else{
      this.formulario.get('apellido').enable();
      this.formulario.get('email').enable();
      this.formulario.patchValue({
        apellido: "",
        email: ""
      })
    }
  }

}
