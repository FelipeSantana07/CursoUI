import { Injectable } from '@angular/core';
import { Aluno } from './../core/model';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  constructor() { }

  list(): Aluno[] {
    return [
      { id: 1, nomealuno: 'Lucas' },
      { id: 2, nomealuno: 'Ana' },
      { id: 3, nomealuno: 'Barbara' },
      { id: 4, nomealuno: 'Marcela' }
    ];
  }
}
