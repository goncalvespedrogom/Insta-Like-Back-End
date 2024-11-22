import express from "express"; // Importa o framework Express para criar o servidor web
import multer from "multer"; // Importa o middleware Multer para lidar com uploads de arquivos
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js"; // Importa as funções controladoras de posts do arquivo postsController.js
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
  // Configura o armazenamento dos arquivos enviados
  destination: function (req, file, cb) {
    // Define o diretório de destino para os uploads ("uploads/")
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    // Define o nome do arquivo como o nome original enviado pelo cliente
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads", storage }); // Cria uma instância do Multer com as configurações de armazenamento

const routes = (app) => {
  // Habilita o middleware para analisar o corpo de requisições JSON (padrão necessário para enviar dados em JSON)
  app.use(express.json());

  app.use(cors(corsOptions))

  // Define rotas para a API de posts
  app.get("/posts", listarPosts); // Rota GET para listar todos os posts (implementada na função listarPosts)
  app.post("/posts", postarNovoPost); // Rota POST para criar um novo post (implementada na função postarNovoPost)

  // Define a rota para upload de imagem
  app.post("/upload", upload.single("imagem"), uploadImagem); // Rota POST para upload de um único arquivo com o campo "imagem" (processado pela função uploadImagem)

  app.put("/upload/:id", atualizarNovoPost)
};

export default routes; // Exporta a função routes para ser utilizada no servidor principal
