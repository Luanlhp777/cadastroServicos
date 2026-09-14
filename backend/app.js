require("dotenv").config();

const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(express.json());

// ROTA DE TESTE
app.get("/", (req, res) => {
    res.json({
        mensagem: "API Cadastro de Serviços funcionando"
    });
});

// LISTAR SERVIÇOS
app.get("/servicos", async (req, res) => {
    try {

        const [resultados] = await pool.query(
            "CALL sp_listar_servicos()"
        );

        res.status(200).json(resultados[0]);

    } catch (erro) {

        console.error("Erro ao listar serviços:", erro);

        res.status(500).json({
            erro: "Erro ao buscar serviços"
        });
    }
});

// CADASTRAR SERVIÇO
app.post("/servicos", async (req, res) => {
    try {
        const {
            nome,
            descricao,
            categoria,
            preco
        } = req.body;

        if (!nome || !categoria || preco === undefined) {
            return res.status(400).json({
                erro: "Nome, categoria e preço são obrigatórios."
            });
        }

        const [resultados] = await pool.query(
            "CALL sp_cadastrar_servico(?, ?, ?, ?)",
            [
                nome,
                descricao,
                categoria,
                preco
            ]
        );

        const id = resultados[0][0].id;

        res.status(201).json({
            mensagem: "Serviço cadastrado com sucesso.",
            servico: {
                id,
                nome,
                descricao,
                categoria,
                preco,
                ativo: 1
            }
        });

    } catch (erro) {
        console.error("Erro ao cadastrar serviço:", erro);

        res.status(500).json({
            erro: "Erro ao cadastrar serviço."
        });
    }
});

// ATUALIZAR SERVIÇO
app.put("/servicos/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const {
            nome,
            descricao,
            categoria,
            preco
        } = req.body;

        if (!nome || !categoria || preco === undefined) {
            return res.status(400).json({
                erro: "Nome, categoria e preço são obrigatórios."
            });
        }

        const [resultados] = await pool.query(
            "CALL sp_atualizar_servico(?, ?, ?, ?, ?)",
            [
                id,
                nome,
                descricao,
                categoria,
                preco
            ]
        );

        const linhasAfetadas =
            resultados[0][0].linhasAfetadas;

        if (linhasAfetadas === 0) {
            return res.status(404).json({
                erro: "Serviço não encontrado."
            });
        }

        res.status(200).json({
            mensagem: "Serviço atualizado com sucesso.",
            servico: {
                id: Number(id),
                nome,
                descricao,
                categoria,
                preco
            }
        });

    } catch (erro) {
        console.error(
            "Erro ao atualizar serviço:",
            erro
        );

        res.status(500).json({
            erro: "Erro ao atualizar serviço."
        });
    }
});

// DESATIVAR SERVIÇO
app.patch("/servicos/:id/desativar", async (req, res) => {
    try {
        const id = req.params.id;

        const [resultados] = await pool.query(
            "CALL sp_desativar_servico(?)",
            [id]
        );

        const linhasAfetadas =
            resultados[0][0].linhasAfetadas;

        if (linhasAfetadas === 0) {
            return res.status(404).json({
                erro: "Serviço não encontrado ou já está desativado."
            });
        }

        res.status(200).json({
            mensagem: "Serviço desativado com sucesso.",
            id: Number(id),
            ativo: 0
        });

    } catch (erro) {
        console.error(
            "Erro ao desativar serviço:",
            erro
        );

        res.status(500).json({
            erro: "Erro ao desativar serviço."
        });
    }
});

// ATIVAR SERVIÇO
app.patch("/servicos/:id/ativar", async (req, res) => {
    try {
        const id = req.params.id;

        const [resultados] = await pool.query(
            "CALL sp_ativar_servico(?)",
            [id]
        );

        const linhasAfetadas =
            resultados[0][0].linhasAfetadas;

        if (linhasAfetadas === 0) {
            return res.status(404).json({
                erro: "Serviço não encontrado ou já está ativo."
            });
        }

        res.status(200).json({
            mensagem: "Serviço ativado com sucesso.",
            id: Number(id),
            ativo: 1
        });

    } catch (erro) {
        console.error(
            "Erro ao ativar serviço:",
            erro
        );

        res.status(500).json({
            erro: "Erro ao ativar serviço."
        });
    }
});

// TESTAR CONEXÃO COM MYSQL
async function testarConexao() {
    try {

        const conexao = await pool.getConnection();

        console.log("Conectado ao MySQL");

        conexao.release();

    } catch (erro) {

        console.error(
            "Erro ao conectar com o MySQL:",
            erro.message
        );
    }
}

app.listen(PORT, () => {

    console.log(
        `Servidor rodando em http://localhost:${PORT}`
    );

    testarConexao();
});