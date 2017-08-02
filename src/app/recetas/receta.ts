import { Ingrediente } from '../Shared/ingrediente';

export class Receta{

    constructor (public nombre, public descripcion, public imagenUrl, public ingredientes: Array<Ingrediente>) { }
}