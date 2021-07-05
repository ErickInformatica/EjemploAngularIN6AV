import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore"

@Component({
  selector: 'app-ciudades-firebase',
  templateUrl: './ciudades-firebase.component.html',
  styleUrls: ['./ciudades-firebase.component.scss']
})
export class CiudadesFirebaseComponent implements OnInit {
  public getCiudades = []; //Almancenar todas las ciudades

  public ciudadesModelo = { //Modelo Agregar Ciudad
    nombreCiudad: '',
    habitantes: 0
  };

  public ciudadId = { //Almacenar la Ciudad buscada por Id
    id: String,
    nombreCiudad: String,
    habitantes: Number
  }


  constructor(
    private _firestoreDB: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.obtenerCiudades();
  }

  obtenerCiudades(){
    this._firestoreDB.collection('ciudades').snapshotChanges().subscribe(
      res=>{
        this.getCiudades = [];
        res.forEach(datos=>{
          this.getCiudades.push(
            {
              id: datos.payload.doc.id,
              data: datos.payload.doc.data()
            }
          )
        })
        console.log(this.getCiudades);
      }
    )
  }

  obtenerCiudadPorId(id){
    this._firestoreDB.collection('ciudades').doc(id).get().subscribe(
      (res: any) =>{
        this.ciudadId.id = res.id;
        this.ciudadId.nombreCiudad = res.data().nombreCiudad;
        this.ciudadId.habitantes = res.data().habitantes;
        console.log(this.ciudadId);

      }
    )
  }

  agregarCiudades(){
    this._firestoreDB.collection('ciudades').add(this.ciudadesModelo).then(
      res=>{
        console.log('Ciudad Agregada Correctamente');
      }
    ).catch(
      error=>{
        console.log(error);
      }
    )
  }

  editarCiudad(id){
    this._firestoreDB.collection('ciudades').doc(id).set(this.ciudadId).then(
      res=>{
        console.log("Ciudad Editada Correctamente");
      }
    ).catch(err=>{
      console.log(err);
    })
  }

  eliminarCiudad(id){
    this._firestoreDB.collection('ciudades').doc(id).delete().then(
      res=>{
        console.log("Ciudad Eliminada Correctamente");
      }
    ).catch(err=>{
      console.log(err);
    })
  }

}
