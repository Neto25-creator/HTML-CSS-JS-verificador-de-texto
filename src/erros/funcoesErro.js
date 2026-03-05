export default function trataErros(erro) {
  if (erro.code === "ENOENT") {
    return "Arquivo nao encontrado! - verifique o caminho escolhido";
  } else {
    return "Erro na aplicação";
  }
}
