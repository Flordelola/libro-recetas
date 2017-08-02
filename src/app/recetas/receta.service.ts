import { Injectable } from '@angular/core';
import { Receta } from './receta';
import { Ingrediente } from '../Shared/ingrediente';

@Injectable()
export class RecetaService {

private recetas: Array<Receta> = [
    new Receta ('Quesillo', 'El quesillo es uno de los platillos más ricos y famosos del pueblo de Nagarote ubicado en el departamento de León, son muchas las personas que viajan hacia este lugar solo para degustar de los mejores quesillos que se encuentran en el país.','https://s-media-cache-ak0.pinimg.com/736x/09/02/be/0902beb530d3ca97d4825222d29053fb.jpg', [
    new Ingrediente ('Quesillo', 1),
    new Ingrediente ('nata ácida', 1),
    new Ingrediente ('cebolla', 1)
    ]),
    new Receta('Pan con tomate', 'Dos rebanadas de pan, con tomate estrujado por arriba, un poquito de aceite y sal.','https://spoonwithme.files.wordpress.com/2012/09/pan-con-tomate1.jpg', [
    new Ingrediente ('Pan', 1),
    new Ingrediente ('tomate', 1),
    new Ingrediente ('aceite', 1)
    ])
  ];
  constructor() { }

  getRecetas(){
    return this.recetas;
  }

}
