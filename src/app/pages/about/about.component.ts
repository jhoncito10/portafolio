import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: any = [];

  constructor(public infoPagina: InfoPaginaService) {

  }

  ngOnInit(): void {

    this.infoPagina.cargarEquipo()
    .subscribe(resp => {
      this.equipo = resp;
      console.log(resp);
    });
  }

}
