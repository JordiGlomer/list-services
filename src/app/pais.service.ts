import { Injectable } from '@angular/core';
import { Pais } from './pais';
import { PAISES } from './mock-paises';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private messageService: MessageService){}

  getPais(id: number): Observable<Pais> {
    const pais = PAISES.find(h => h.id === id)!;
    this.messageService.add(`PaisService: fetched pais id=${id}`);
    return of(pais);
  }

  
  getPaises(): Observable<Pais[]> {
    const paises = of(PAISES);
    this.messageService.add('PaisService: fetched paises')
    return paises;
  }
  
}
