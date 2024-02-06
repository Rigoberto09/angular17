import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Cliente } from './interface/clientes.interface';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  urll:string="https://localhost:7231/cliente/listar"
  // url:string="https://localhost:44391/api/clientes";
 
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.urll);
  }
   // getClientes():Observable<Cliente | undefined>{
  //  return this.http.get<Cliente>(this.url).pipe(
  //   catchError((e)=>{
  //     console.log(e);
  //     return of(undefined)
  //   })
  //  )
  // }
}
