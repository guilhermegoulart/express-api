import express from "express";
import connectInDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectInDataBase();

connection.on("error", (erro) => {
  console.error("erro de conexão", erro);
})

connection.once("open", () => {
  console.log("successful database connection");
})

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const index = buscaLivro(req.params.id);
  livros.splice(index, 1);
  res.status(200).send("Livro removido com sucesso!");
});

export default app;