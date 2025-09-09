// api/inscricao.js
export default function handler(req, res) {
  if (req.method === "POST") {
    const { nome, posicao } = req.body;

    if (!nome || !posicao) {
      return res.status(400).json({ error: "Preencha nome e posição" });
    }

    return res.status(200).json({
      ok: true,
      message: `Inscrição recebida: ${nome} (${posicao})`,
    });
  }

  return res.status(405).json({ error: "Método não permitido" });