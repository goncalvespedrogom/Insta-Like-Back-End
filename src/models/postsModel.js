import conectarAoBanco from "../config/dbConfig.js"
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO); // Conecta ao banco de dados usando a string de conexão obtida da variável de ambiente STRING_CONEXAO // O resultado da conexão é armazenado na variável conexao

export default async function getTodosPosts() { // Função assíncrona para buscar todos os posts do banco de dados
  const db = conexao.db("insta-like"); // Obtém o banco de dados chamado "insta-like" da conexão
  const colecao = db.collection("posts"); // Obtém a coleção "posts" do banco de dados
  return colecao.find().toArray(); // Executa uma consulta para encontrar todos os documentos da coleção // e retorna os resultados como um array
}
