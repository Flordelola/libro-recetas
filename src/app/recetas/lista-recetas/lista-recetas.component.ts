import { Component, Output, EventEmitter } from '@angular/core';
import { Receta } from '../receta'; //hay que poner ../ para acceder al archivo ya que está en otra carpeta fuera de lista-recetas
@Component({
  selector: 'app-lista-recetas',
  templateUrl: './lista-recetas.component.html',
  styleUrls: ['./lista-recetas.component.css']
})
export class ListaRecetasComponent  {
  recetas: Array<Receta> = [];
 
  @Output () recetaSeleccionada = new EventEmitter <Receta> ();



  receta: Receta = new Receta ('Quesillo', ' El quesillo es uno de los platillos más ricos y famosos del pueblo de Nagarote ubicado en el departamento de León, son muchas las personas que viajan hacia este lugar solo para degustar de los mejores quesillos que se encuentran en el país.','https://s-media-cache-ak0.pinimg.com/736x/09/02/be/0902beb530d3ca97d4825222d29053fb.jpg', ['1 libra de cuajada fresca, 1 libra de crema agria, 1 libra de cebolla amarilla, Vinagre negro al gusto, Sal al gusto']);
  constructor() { }

  seleccionarReceta(){

    this.recetaSeleccionada.emit(this.receta);
  }
}
  

