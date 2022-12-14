import { Curso } from './../../core/model';
import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {

  cursos: Curso[]= [];

  displayedColumns =['id','nomecurso']

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.listarCursos()
  }

}
