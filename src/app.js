import express from "express";
import connectInDataBase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connection = await connectInDataBase();

connection.on("error", (erro) => {
  console.error("erro de conexão", erro);
})

connection.once("open", () => {
  console.log("successful database connection");
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de Node.js");
});

app.get("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros[index].titulo = req.body.titulo;
  res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;

//mongodb+srv://guilhermegoulartm:<password>@cluster0.ws6nnbb.mongodb.net/?retryWrites=true&w=majority
