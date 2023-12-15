import "dotenv/config";
import app from "./src/app.js";

const PORT = 3030;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta 3030");
});
