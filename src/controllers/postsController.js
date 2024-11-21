import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts(); // Chama a função getTodosPosts() para obter os posts do banco de dados
  res.status(200).json(posts); // Envia uma resposta HTTP com status 200 (sucesso) e os posts no formato JSON
}
