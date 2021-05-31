import { Component, OnInit } from '@angular/core';
import { PruebaService } from 'src/app/servicios/pruebas.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.scss'],
  providers: [PruebaService]
})
export class GraficasComponent implements OnInit {
  private pruebasArray;


  estado = true;
  chartInicial = 'pie';

  chartTypes = [
    { nombreTipo: 'pie', texto: 'Circular'},
    { nombreTipo: 'line', texto: 'Lineas'},
    { nombreTipo: 'bar', texto: 'Barras'}
  ]


  chartOptions = {
    responsive: true,
  };
  chartLabels = [];
  chartData = [];
  /* chartColors = [
    {
      backgroundColor: ['#76d275', '#6ec6ff', '#e35183', '#b0ff57']
    },
  ]; */
  chartColors = [
    {
      backgroundColor: []
    },
  ];

  chartLegend = true;
  chartPlugins = [];
  constructor(private _pruebaService: PruebaService) {}

  ngOnInit(): void {
    this.obtenerPruebas()
  }

  obtenerPruebas(){
    this._pruebaService.obtenerPruebas().subscribe(
      response=>{
        console.log(response);
        this.pruebasArray = response.pruebasObtenidas;
        /* for (let i = 0; i < this.pruebasArray.length; i++) {
          this.chartLabels.push(this.pruebasArray[i].ciudad);
          this.chartData.push(this.pruebasArray[i].habitantes);
        } */
        this.pruebasArray.forEach(datos =>{
          this.chartLabels.push(datos.ciudad);
          this.chartData.push(datos.habitantes);
          this.chartColors[0].backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
        })
      }
    )
  }

  cambioEstado(){
    this.estado = !this.estado;
    console.log(this.estado);

  }
}
