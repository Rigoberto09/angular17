import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesService } from './clientes.service';
import { Cliente, ClienteInset } from './interface/clientes.interface';
// variables con valor statito
import { Formulario } from './interface/valores';
// importacion de modulos de primeNG
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputMaskModule } from 'primeng/inputmask';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonModule,
    InputTextModule,
    FormsModule,
    TableModule,
    InputMaskModule,
    ToastModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  // valores del formulario
  primerNombre: string = '';
  segundoNombre: string = '';
  primerApellido: string = '';
  segundoApellido: string = '';
  dereccionCompleta: string = '';
  correoElectronico: string = '';
  // contador de registros 
  contadorRegistros:string='';
  constructor(private clienteservice: ClientesService) {}
  cliente: Cliente[] = [];
  // variables del formulario
  nombre1 = Formulario.primerNombre;
  nombre2 = Formulario.segundoNombre;
  apellido1 = Formulario.primerApellido;
  apellido2 = Formulario.segundoApellido;
  direcion = Formulario.direccion;
  correo = Formulario.correoElectronico;
  celular: number = 0;

  // ngOnInit(): void {
  //   this.clienteservice.getClientes().subscribe((clientes: Cliente[]) => {
  //     this.cliente = clientes;
  //     console.log("clientes",clientes);
  //   });
  // }
  // ngOnInit(): void {
  //   this.clienteservice.getClientes().subscribe({
  //     next: (clientes: Cliente[]) => {
  //       this.cliente = clientes;
  //       console.log("clientes", this.cliente);
  //     },
  //     error: (error) => {
  //       console.log("error",error);
  //     }
  //   });
  // }
  ngOnInit(): void {
    this.clienteservice.getClientes().subscribe({
      next: (Cliente) => {
        this.cliente = Cliente;
        this.contadorRegistros=Cliente.length.toString();
        console.log('respuesta', Cliente);
        // this.cliente = response.clientes;
        console.log('aqui');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  title = 'Crud';
  agregarDatos() {
    // Crear un nuevo cliente
    // const nuevoCliente: ClienteInset = {
    //  // Opcionalmente, puedes establecerlo en null o algún valor por defecto
    // };
    // // Agregar el nuevo cliente al array
    // this.cliente.push(nuevoCliente);
    // console.log(this.cliente); // Output: ["dato1", "dato2", "dato3", "dato4", "dato5", ["dato6", "dato7"]]
  }
  crearCliente() {
    const nuevoCliente: ClienteInset = {
      primer_nombre: this.primerNombre,
      segundo_nombre: this.segundoNombre,
      primer_apellido: this.primerApellido,
      segundo_apellido: this.segundoApellido,
      direccion: this.dereccionCompleta,
      telefono: this.celular.toString(),
      correo: this.correoElectronico,
      fecha_registro: new Date().toISOString(),
      usuario_creo: 'Borjas',
      usuario_borro: null,
    };
    if (
      !this.primerApellido ||
      !this.primerApellido ||
      !this.segundoApellido ||
      !this.dereccionCompleta ||
      !this.correo ||
      !this.celular
    ) {
      return;
    }
    this.clienteservice.postCliente(nuevoCliente).subscribe({
      next: (response) => {
        console.log('datos ingresados', response);

        this.ngOnInit();
      },
      error: (err) => {
        console.log('no se puedo ingresar', err);
      },
    });
  }
  eliminarCliente(id: number) {
    this.clienteservice.deleteCliente(id).subscribe({
      next: (response) => {
        console.log('elemento eliminado', response);
        this.ngOnInit();
      },
      error(err) {
        console.log('no se puedo eliminar', err);
      },
    });
  }
  // convertir el texto en mayusculas
  upper(valor: string) {
    this.primerNombre = valor.toUpperCase();
  }
  actualizarDato(id:number,clienteDatosNuevo:ClienteInset) {
    console.log("datos resibidos",clienteDatosNuevo,id)

    this.clienteservice.actualizar(id, clienteDatosNuevo).subscribe({
        next: (response) => {
            console.log("Cliente actualizado", response);
        },
        error: (err) => {
            console.log("Error al actualizar", err);
        }
    });
}

}
