import { Component } from '@angular/core';

import { Turma, TurmaDetalhes } from './models/turma';
import { TurmaService } from './services/turma.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    public turmaService: TurmaService,
  ) {
  }

  public turma?: TurmaDetalhes;

  public exibeTurma(t: Turma): void {
    this.turmaService.getDetalhes(t._id).subscribe(tDet => {
      this.turma = tDet;
    });
  }

}
