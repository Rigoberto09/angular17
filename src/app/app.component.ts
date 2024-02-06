import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientesService } from './clientes.service';
import { Cliente } from './interface/clientes.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  constructor(private clienteservice:ClientesService){}
  cliente:Cliente[]=[];

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
        console.log("respuesta",Cliente);
        // this.cliente = response.clientes;
        console.log("aqui");
      },
      error:(error)=>{
        console.log(error);
      }
    }
    )
  }
  title = 'Crud';
}
