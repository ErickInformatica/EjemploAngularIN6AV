import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EncuestasComponent } from './componentes/encuestas/encuestas.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { ChartsModule } from '@rinminase/ng-charts';
import { ComidasCiudadComponent } from './componentes/comidas-ciudad/comidas-ciudad.component';
import { EditarPerfilComponent } from './componentes/editar-perfil/editar-perfil.component';

import { AngularFireModule } from "@angular/fire";
import { environment } from 'src/environments/environment.prod';
import { CiudadesFirebaseComponent } from './componentes/ciudades-firebase/ciudades-firebase.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    NavbarComponent,
    UsuariosComponent,
    EncuestasComponent,
    GraficasComponent,
    ComidasCiudadComponent,
    EditarPerfilComponent,
    CiudadesFirebaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
