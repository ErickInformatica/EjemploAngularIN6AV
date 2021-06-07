import { Component, OnInit } from '@angular/core';
import { GLOBAL } from 'src/app/servicios/global.service';
import { SubirImagenService } from 'src/app/servicios/subirImagen.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
  providers: [SubirImagenService, UsuarioService]
})
export class EditarPerfilComponent implements OnInit {
  public token;
  public url;
  public identidad;
  constructor(
    private _usuarioService: UsuarioService,
    private _subirService: SubirImagenService
  ) {
    this.identidad = _usuarioService.obtenerIdentidad();
    this.token = _usuarioService.obtenerToken();
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
  }

  subirImagen(){
    this._subirService.subirImagen(this.url + 'subirImagen', [], this.imagenASubir, this.token,
    'imagen').then((resultado: any) => {
      console.log(resultado);
      this.identidad.imagen = resultado.usuarioEncontrado.imagen;
      localStorage.setItem('identidad', JSON.stringify(this.identidad) );
    })

  }

  public imagenASubir: Array<File>;
  inputEvento(fileInput: any){
    this.imagenASubir = <Array<File>>fileInput.target.files;
  }

}
