import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto: any = {};

  id: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.id);
      this.productoService.getProducto(params.id).subscribe(prod => {
        this.producto = prod;
        this.id = params.id;
      });
    });
  }


}
