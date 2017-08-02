import { Component, OnInit, Input } from '@angular/core';
import { Receta } from '../receta';
import { ListaCompraService } from '../../lista-compra/lista-compra.service';

@Component({
  selector: 'app-receta-info',
  templateUrl: './receta-info.component.html',
  styleUrls: ['./receta-info.component.css']
})
export class RecetaInfoComponent implements OnInit {
  
  @Input() recetaSeleccionada: Receta;
  
  constructor(private listaCompraService: ListaCompraService) { }

  ngOnInit() {
  }

  anadirAListaCompra() {
    this.listaCompraService.anadirIngredientes(this.recetaSeleccionada.ingredientes);
  }
}
