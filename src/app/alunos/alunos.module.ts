import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { AlunosRoutingModule } from './alunos-routing.module';
import { ListaalunosComponent } from './listaalunos/listaalunos.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    ListaalunosComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AlunosModule { }
