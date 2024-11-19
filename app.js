import productsAvo from "./products.js";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/products", (req,res)=>{
    res.status(200).send(productsAvo)
});

app.listen(3000, () => {
    console.log("Servidor rodando...");
});