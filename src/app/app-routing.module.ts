import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComidasCiudadComponent } from './componentes/comidas-ciudad/comidas-ciudad.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';
import { EncuestasComponent } from './componentes/encuestas/encuestas.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'encuestas', component: EncuestasComponent },
  { path: 'graficas', component: GraficasComponent},
  { path: 'pruebas', component: ComidasCiudadComponent},
  {path: 'editarPerfil', component: EditarPerfilComponent},
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
