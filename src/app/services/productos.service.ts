import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }


  public cargarProductos() {
    return this.http.get('https://pruebadavinci-de3d0.firebaseio.com/productos_idx.json');
  }

  public getProducto(id: string) {
    return this.http.get(`https://pruebadavinci-de3d0.firebaseio.com/productos/${id}.json`);
  }

  public cargarProductosSearch(termino: string, arreglo: any[]) {
    // tslint:disable-next-line: only-arrow-functions
    return arreglo.filter( function(el: any) {
      return el.categoria.indexOf(termino) >= 0 ||
             el.titulo.indexOf(termino) >= 0 ;
    });
  }
}
