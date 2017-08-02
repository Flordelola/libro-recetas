import { Component, OnInit } from '@angular/core';
import { Receta } from './receta';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetaSeleccionada: Receta;
  
  constructor() { }

  ngOnInit() {
  }

}
