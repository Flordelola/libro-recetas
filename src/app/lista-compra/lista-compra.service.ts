import { Ingrediente } from '../Shared/ingrediente';


export class ListaCompraService {
  private ingredientes: Array<Ingrediente> =[];

  constructor() { }

  getItems(){
   return this.ingredientes;
  }

  anadirIngredientes(items: Array<Ingrediente>){
    Array.prototype.push.apply(this.ingredientes, items);
  }
}
