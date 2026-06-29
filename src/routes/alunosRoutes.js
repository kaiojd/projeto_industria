const express = require("express");

const router = express.Router();

const alunosController = require("../controllers/alunosController");

router.get("/alunos", alunosController.listarAlunos);

router.post("/alunos", alunosController.criarAluno);

router.get("/alunos/:id", alunosController.buscarAluno);

module.exports = router;
