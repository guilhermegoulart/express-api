import express from "express";
import connectInDataBase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await connectInDataBase();

connection.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

connection.once("open", () => {
  console.log("successful database connection");
});

const app = express();
routes(app);

export default app;