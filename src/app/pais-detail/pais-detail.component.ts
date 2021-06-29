import { Component, OnInit} from '@angular/core';
import { Pais } from '../pais';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-detail',
  templateUrl: './pais-detail.component.html',
  styleUrls: ['./pais-detail.component.scss']
})
export class PaisDetailComponent implements OnInit {
 pais: Pais | undefined;
   
  constructor(
    private route: ActivatedRoute,
    private paisService: PaisService,
    private location: Location) { }

  ngOnInit(): void {
    this.getPais();
  }

  getPais(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.paisService.getPais(id)
      .subscribe(pais => this.pais = pais);
  }
  goBack(): void {
    this.location.back();
}
}
