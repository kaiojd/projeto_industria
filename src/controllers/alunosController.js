const prisma = require('../prisma');

exports.criarAluno = async (req, res) => {
    try {


        const { nome, email, turma } = req.body;

        const aluno = await prisma.aluno.create({
            data: { nome, email, turma }
        });

        return res.status(201).json(aluno);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.listarAlunos = async (req, res) => {
    const alunos = await prisma.aluno.findMany();
    return res.json(alunos);
};

exports.buscarAluno = async (req, res) => {
    const { id } = req.params;

    const aluno = await prisma.aluno.findUnique({
        where: { id: Number(id) }
    });

    return res.json(aluno);
};