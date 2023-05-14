import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Turma, TurmaDetalhes } from '../models/turma';
import { ITurma, ITurmaDetalhes } from '../interfaces/turma';
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
        iTurma._id,
        iTurma.disciplina_codigo,
        iTurma.ano,
        iTurma.periodo,
        iTurma.alunos_total,
      ))),
    );
  }

  public getDetalhes(id: string): Observable<TurmaDetalhes> {
    return this.httpClient.get<ITurmaDetalhes>(
      'http://localhost:3000/api/turmas/' + id,
    ).pipe(
      map((x) => new TurmaDetalhes(
        x._id,
        new Disciplina(
          x.disciplina.codigo,
          x.disciplina.nome,
        ),
        x.ano,
        x.periodo,
        x.alunos.map(a => new Aluno(
          a.codigo,
          a.nome,
        )),
      )),
    );
  }

}
