import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../Shared/ingrediente';
import { ListaCompraService } from './lista-compra.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit {
   items: Array<Ingrediente> = [];

  constructor(private listaCompraService: ListaCompraService) { }

  ngOnInit() {
    this.items = this.listaCompraService.getItems();
  }

}
