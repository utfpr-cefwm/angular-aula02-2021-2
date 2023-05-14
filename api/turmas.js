const express = require('express');
const router = express.Router();

const TURMAS_DETALHES = [
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

const TURMAS_RESUMO = TURMAS_DETALHES.map(t => ({
  _id: t._id,
  ano: t.ano,
  periodo: t.periodo,
  disciplina_codigo: t.disciplina.codigo,
  alunos_total: t.alunos.length,
}));

router.get(`/`, function(req, res, next) {
  res.json(TURMAS_RESUMO);
});

router.get(`/:_id`, function(req, res, next) {
  const _id = req.params._id;
  res.json(TURMAS_DETALHES.find(t => t._id === _id));
});

module.exports = router;
