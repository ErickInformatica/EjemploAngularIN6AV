import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/servicios/pruebas.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-comidas-ciudad',
  templateUrl: './comidas-ciudad.component.html',
  styleUrls: ['./comidas-ciudad.component.scss'],
  providers: [PruebaService, UsuarioService]
})
export class ComidasCiudadComponent implements OnInit {
  public pruebasModel;
  public token;
  constructor(private _pruebasService: PruebaService,
    private _usuarioService: UsuarioService) {
      this.token = this._usuarioService.obtenerToken();
     }

  ngOnInit(): void {
    this.obtenerPruebas();
    console.log(this.token);

  }

  obtenerPruebas(){
    this._pruebasService.obtenerPruebas().subscribe(
      response => {
        this.pruebasModel = response.pruebasObtenidas;
        console.log(response);
      }
    )
  }

  obtenerIdComida(idComida){
    console.log(idComida);
  }

}
