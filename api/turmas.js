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

router.get(`/`, function(req, res, next) {
  res.json(TURMAS_DETALHES);
});

module.exports = router;
