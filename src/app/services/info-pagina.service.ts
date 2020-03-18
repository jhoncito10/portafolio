import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargada = false;

  equipo: any = [];

  constructor(private http: HttpClient ) {
    this.cargarInfo();
  }



  private cargarInfo() {

    this.http.get('assets/data/data-pagina.json')
      .subscribe(resp => {
        this.cargada = true;
        this.info = resp;

      });

  }


  public cargarEquipo() {
    return this.http.get('https://pruebadavinci-de3d0.firebaseio.com/equipo.json');
  }
}
