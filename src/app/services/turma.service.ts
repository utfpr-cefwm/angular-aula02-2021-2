import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Turma } from '../models/turma';
import { ITurma } from '../interfaces/turma';
import { Disciplina } from '../models/disciplina';
import { Aluno } from '../models/aluno';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(
    public httpClient: HttpClient,
  ) {
  }

  public get(): Observable<Turma[]> {
    return this.httpClient.get<ITurma[]>(
      'http://localhost:3000/api/turmas/',
    ).pipe(
      map((x) => x.map(iTurma => new Turma(
        new Disciplina(
          iTurma.disciplina.codigo,
          iTurma.disciplina.nome,
        ),
        iTurma.ano,
        iTurma.periodo,
        iTurma.alunos.map(iAluno => new Aluno(
          iAluno.codigo,
          iAluno.nome,
        )),
      ))),
    );
  }

}
