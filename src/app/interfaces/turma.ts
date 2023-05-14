export interface ITurma {
  _id: string;
  ano: number;
  periodo: number;
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
