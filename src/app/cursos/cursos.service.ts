import { Injectable } from '@angular/core';
import { Curso } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  listarCursos(): Curso[] {
    return[
    {id: 1, nomecurso: 'Desenvolvimento de sistema'},
    {id: 2, nomecurso: 'Logística'},
    {id: 3, nomecurso: 'Administração'},
    {id: 4, nomecurso: 'Marketing'}
    ];
  }
}
