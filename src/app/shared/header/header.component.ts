import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public infoPagService: InfoPaginaService, private route: Router) {
    
  }

  ngOnInit(): void {
  }


  buscarProducto(termino: string) {
    this.route.navigate(['/home', termino]);
  }
}
