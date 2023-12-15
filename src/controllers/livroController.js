import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

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
      const livroItem = await livro.findById(id);
      res.status(200).json(livroItem);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - can't find this book` });
    }
  }

  static async CadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);
      const livroCompleto = {
        ...novoLivro,
        autor: { ...autorEncontrado._doc },
      };
      await livro.create(livroCompleto);
      res
        .status(201)
        .json({ message: "successfully created", livro: novoLivro });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - error in register book on database`,
      });
    }
  }

  static async AtualizarLivro(req, res) {
    try {
      const id = req.params.id;
      const livroData = req.body;
      await livro.findByIdAndUpdate(id, livroData);
      res.status(200).json({ message: "successfully updated" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - error in update book` });
    }
  }

  static async DeletarLivro(req, res) {
    try {
      const id = req.params.id;
      await livro.findByIdAndDelete(id);
      res.status(200).json({ message: "book deleted" });
    } catch (error) {
      res.status(500).json({
        message: `${error.message} - was not possible delete this book`,
      });
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try {
      const livrosPorEditora = await livro.find({ editora: editora });
      res.status(200).json(livrosPorEditora);
    } catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na busca` });
    }
  }
}

export default LivroController;
