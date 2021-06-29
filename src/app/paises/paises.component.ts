import { Component, OnInit } from '@angular/core';
import { Pais } from '../pais';
import { PaisService } from '../pais.service';


@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.scss'],
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];
  
  

  constructor(private paisService: PaisService) {}

  
  getPaises(): void {
    this.paisService.getPaises()
    .subscribe(paises => this.paises = paises);
  }
  ngOnInit() {
    this.getPaises();
  }
  
  }
