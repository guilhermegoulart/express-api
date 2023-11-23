import mongoose, { mongo } from "mongoose";

async function connectInDataBase() {
  mongoose.connect(
    "mongodb+srv://guilhermegoulartm:AristeuGoulart@cluster0.ws6nnbb.mongodb.net/livraria?retryWrites=true&w=majority"
  );

  return mongoose.connection;
}

export default connectInDataBase;
