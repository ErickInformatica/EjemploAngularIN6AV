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
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(public _http: HttpClient) {
    this.ruta = GLOBAL.url;
  }

  registro(usuario: Usuario): Observable<any>{
    let params = JSON.stringify(usuario);

    return this._http.post(this.ruta + 'registrar', params, {headers: this.headersVariable})
    // `${this.ruta}registrar`
  }

  obtenerUsuarios(): Observable<any>{

    return this._http.get(this.ruta + 'obtenerUsuarios', {headers: this.headersVariable})
  }
}
