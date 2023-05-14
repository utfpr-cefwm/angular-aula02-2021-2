import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Turma } from 'src/app/models/turma';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-lista-turmas',
  templateUrl: './lista-turmas.component.html',
  styleUrls: ['./lista-turmas.component.css']
})
export class ListaTurmasComponent implements OnInit {

  @Output()
  public turmaSelecionada: EventEmitter<Turma> = new EventEmitter();

  public turmas: Turma[] = [];

  constructor(
    public turmaService: TurmaService,
  ) {
  }

  ngOnInit(): void {
    this.turmaService.get().subscribe(
      (x) => {
        this.turmas = x;
      },
    );
  }

  public selecionaTurma(t: Turma): void {
    this.turmaSelecionada.emit(t);
  }

}
