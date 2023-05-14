export interface ITurmaBase {
  _id: string;
  ano: number;
  periodo: number;
}

export interface ITurmaDetalhes extends ITurmaBase {
  disciplina: {
    _id: string;
    codigo: string;
    nome: string;
  };
  alunos: {
    _id: string;
    codigo: number;
    nome: string;
  }[];
}

export interface ITurma extends ITurmaBase {
  disciplina_codigo: string;
  alunos_total: number;
}
