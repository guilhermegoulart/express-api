import livro from "../models/Livro.js";

class LivroController {
  static async listarLivros(req, res) {
    try {
      const listaLivros = await livro.find({});
      res.status(200).json(listaLivros);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - requisition fail` });
    }
  }

  static async listarLivroPorId(req, res) {
    try {
      const id = req.params.id;
      const livro = await livro.findById(id);
      res.status(200).json(livro);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - can't find this book` });
    }
  }

  static async CadastrarLivro(req, res) {
    try {
      const novoLivro = await livro.create(req.body);
      res
        .status(201)
        .json({ message: "successfully created", livro: novoLivro });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - error in register book on database`,
      });
    }
  }
}

export default LivroController;
