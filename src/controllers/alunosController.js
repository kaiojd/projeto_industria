const prisma = require('../prisma');

exports.criarAluno = async (req, res) => {
    try {
        console.log("🔥 CHEGOU NO CONTROLLER");

        const { nome, email } = req.body;

        const aluno = await prisma.aluno.create({
            data: {
                nome,
                email
            }
        });

        console.log("🔥 SALVOU NO BANCO", aluno);

        return res.status(201).json(aluno);

    } catch (error) {
        console.log("❌ ERRO:", error.message);
        return res.status(500).json({ error: error.message });
    }
};
