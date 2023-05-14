import { Injectable } from '@angular/core';
import { Turma } from '../models/turma';
import { ITurma } from '../interfaces/turma';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Disciplina } from '../models/disciplina';
import { Aluno } from '../models/aluno';

const TURMAS: ITurma[] = [
  {
    "_id": "613be41ddb9c47fb90d20d98",
    "ano": 2020,
    "periodo": 1,
    "disciplina": {
      "_id": "613be41ddb9c47fb90d20d8e",
      "codigo": "WEB03",
      "nome": "Angular",
    },
    "alunos": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 111,
        "nome": "João Francisco Neto"
      },
      {
        "_id": "613be41ddb9c47fb90d20d92",
        "codigo": 333,
        "nome": "Jaqueline dos Santos"
      },
      {
        "_id": "613be41ddb9c47fb90d20d93",
        "codigo": 444,
        "nome": "Enzo Andrade"
      },
    ],
  },
  {
    "_id": "613be41ddb9c47fb90d20d99",
    "ano": 2021,
    "periodo": 2,
    "disciplina": {
      "_id": "613be41ddb9c47fb90d20d8f",
      "codigo": "WEB11",
      "nome": "Git",
    },
"alunos": [
      {
        "_id": "613be41ddb9c47fb90d20d90",
        "codigo": 111,
        "nome": "João Francisco Neto"
      },
      {
        "_id": "613be41ddb9c47fb90d20d91",
        "codigo": 222,
        "nome": "João Alberto das Couves"
      },
    ],
  },
];

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(
  ) {
  }

  public get(): Observable<Turma[]> {
    return of(TURMAS).pipe(
      delay(1000),
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
