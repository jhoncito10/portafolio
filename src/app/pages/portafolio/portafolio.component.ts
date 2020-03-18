import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productos: any = [];

  carga = false;

  constructor(public producto: ProductosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.producto.cargarProductos().subscribe((prod: any[]) => {
      this.route.params.subscribe(resp => {
        if (resp.termino) {
          this.productos = this.producto.cargarProductosSearch(resp.termino, prod);
          this.carga = true;
        } else {
          this.productos = prod;
          this.carga = true;
        }
      });

    });

  }

}
