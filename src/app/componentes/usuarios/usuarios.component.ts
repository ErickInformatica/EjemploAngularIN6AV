import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [UsuarioService]
})
export class UsuariosComponent implements OnInit {
  public usuariosList;
  public usuarioIDModel: Usuario;
  constructor(private _usuarioService: UsuarioService) {
    this.usuarioIDModel = new Usuario('','','','','','','');
  }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.obtenerUsuarios().subscribe(
      response=>{
        console.log(response.usuarios);
        this.usuariosList = response.usuarios;

      },
      error=>{
        console.log(<any>error);

      }
    )
  }

  obtenerUsuarioId(id){
    this._usuarioService.obtenerUsuario(id).subscribe(
      response=>{
        console.log(response);

      }
    )
  }

}
