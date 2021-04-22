import { Injectable } from '@angular/core';
import { GLOBAL } from './global.service';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public ruta: String;
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  registro(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    let headersVariable = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.ruta + 'registrar', params, {headers: headersVariable})
    // `${this.ruta}registrar`
  }
}
