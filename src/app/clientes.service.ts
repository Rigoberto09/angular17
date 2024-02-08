import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Cliente, ClienteInset } from './interface/clientes.interface';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  constructor(private http: HttpClient) {}

  urll: string = 'https://localhost:7000/cliente/listar';
  urlApi2017: string = 'http://localhost:64051/api/clientes';
  // url:string="https://localhost:44391/api/clientes";

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urlApi2017);
  }
  // getClientes():Observable<Cliente | undefined>{
  //  return this.http.get<Cliente>(this.url).pipe(
  //   catchError((e)=>{
  //     console.log(e);
  //     return of(undefined)
  //   })
  //  )
  // }

  //agregar datos a la base de datos
  postCliente(cliente: ClienteInset): Observable<ClienteInset> {
    console.log('valres a insertar', cliente);
    return this.http.post<Cliente>(this.urlApi2017, cliente);
  }

  //eliminar cliente
  deleteCliente(id: number): Observable<any> {
    const url = `${this.urlApi2017}/${id}`; // Concatena el ID a la URL de la API
    return this.http.delete<any>(url);
  }
  //actualizar clientes
  actualizar(id: number, datosActualizados: ClienteInset): Observable<any> {
    const url = `${this.urlApi2017}/${id}`;
    console.log("datos actualizar",datosActualizados);
    return this.http.put<any>(url, datosActualizados);
  }
}
