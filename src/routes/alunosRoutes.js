const express = require("express");

const router = express.Router();

router.get("/alunos", (req, res) => {
    res.status(200).json({
        mensagem: "Lista de alunos"
    });
});

router.post("/alunos", (req, res) => {
    res.status(201).json({
        mensagem: "Aluno cadastrado com sucesso"
    });
});

router.get("/alunos/:id", (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        mensagem: `Aluno encontrado com id ${id}`
    });
});

module.exports = router;