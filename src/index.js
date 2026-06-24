const express = require("express");

const app = express();

const alunosRoutes = require("./routes/alunosRoutes");

app.use(express.json());

app.use(alunosRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});