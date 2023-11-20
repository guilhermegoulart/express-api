import http from "http";

const PORT = 3030;

const rotas = {
  "/": "Curso de Express API",
  "/livros": "Listagem de livros",
  "/autores": "Listagem de autores",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/plain"})
  res.end(rotas[req.url])
})

server.listen(PORT, () => {
  console.log("Servidor rodando na porta 3030")
})
