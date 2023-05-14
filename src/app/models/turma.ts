import { Aluno } from "./aluno";
import { Disciplina } from "./disciplina";

export abstract class TurmaBase {

  constructor(
    public _id: string,
    public ano: number,
    public periodo: number,
  ) {
  }

  public abstract nome: string;

  public abstract alunosTotal: number;

}

export class Turma extends TurmaBase {
  constructor(
    public _id: string,
    public disciplinaCodigo: string,
    public ano: number,
    public periodo: number,
    public alunosTotal: number,
  ) {
    super(_id, ano, periodo);
  }

  public get nome(): string {
    return `${this.disciplinaCodigo}-${this.ano}/${this.periodo}`;
  }

}
export class TurmaDetalhes extends TurmaBase {
  constructor(
    public _id: string,
    public disciplina: Disciplina,
    public ano: number,
    public periodo: number,
    public alunos: Aluno[],
  ) {
    super(_id, ano, periodo);
  }

  public get nome(): string {
    return `${this.disciplina.codigo}-${this.ano}/${this.periodo}`;
  }

  public get alunosTotal(): number {
    return this.alunos.length;
  }

}
