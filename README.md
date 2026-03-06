# Verifica Texto

Uma pequena biblioteca Node.js destinada a analisar arquivos de texto, contando palavras e
identificando palavras duplicadas em cada parágrafo. O projeto também fornece uma CLI simples
para processar arquivos de texto e gerar relatórios em arquivos de destino.

---

## 📌 Objetivo

"Verifica Texto" foi criada como uma biblioteca reutilizável que pode ser integrada em outros
projetos ou utilizada via linha de comando. Seu foco é analisar blocos de texto e devolver um
objeto com a contagem de palavras (apenas palavras com 3 ou mais caracteres) e indicar quais
termos aparecem mais de uma vez em cada parágrafo. Dessa forma, o usuário pode pensar em refatorar seu texto para evitar repetições desnecesárias.

---

## 🛠️ Principais funcionalidades

- **Conta palavras** em um texto, ignorando pontuação e considerando somente palavras com
  3 caracteres ou mais.
- **Identifica palavras duplicadas** em cada parágrafo (linhas separadas por `\n`).
- **Gera relatório** em arquivo com as palavras duplicadas encontradas por parágrafo.
- **Tratamento de erros** básico (arquivo não encontrado).
- **CLI** para processar arquivos sem necessidade de escrever código.

---

## 📁 Estrutura do projeto

```text
src/
  cli.js              # ponto de entrada da linha de comando
  index.js            # lógica principal da biblioteca
  helpers.js          # funções auxiliares para montar saída
  erros/
    funcoesErro.js    # tratamento de exceções
arquivos/             # exemplos de texto (não fazem parte do pacote)
resultados/           # pasta onde o CLI grava o resultado
package.json          # dependências e scripts do npm
README.md             # este arquivo
```

---

## ⚙️ Tecnologias utilizadas

- Node.js (ES Modules)
- [Commander](https://www.npmjs.com/package/commander) para parsing de argumentos CLI
- [Chalk](https://www.npmjs.com/package/chalk) para mensagens coloridas no terminal
- `fs` e `path` do Node.js para leitura e escrita de arquivos

---

## 🚀 Como usar

### Instalação

```bash
# a partir do diretório do projeto
npm install
```

> Se você publicar esta biblioteca no npm ou usa como dependência em outro projeto,
> adicione-a ao `package.json` com `npm install <caminho>` ou com o nome do pacote.

### Uso como biblioteca

```js
import { contaPalavras } from "verifica-texto";

const texto = "Este é um teste.\nEste teste é apenas um teste.";
const resultado = contaPalavras(texto);
console.log(resultado);
```

O retorno é um array de objetos onde cada posição corresponde a um parágrafo:

```json
[
  { "este": 1, "teste": 1 },
  { "este": 1, "teste": 2 }
]
```

Para obter uma string formatada com palavras duplicadas use a função `montaSaidaArquivo`:

```js
import { montaSaidaArquivo } from "verifica-texto/helpers";
const saida = montaSaidaArquivo(resultado);
console.log(saida);
```

### Uso da CLI

O pacote inclui um comando que pode ser rodado diretamente usando `node` ou após a
instalação global/local:

```bash
node src/cli.js -t ./arquivos/texto-aprendizado.txt -d ./resultados
```

ou, se instalado globalmente:

```bash
npm install -g .
verifica-texto -t ./arquivos/texto-aprendizado.txt -d ./resultados
```

#### Opções

| Flag            | Descrição                                       |
| --------------- | ----------------------------------------------- |
| `-t, --texto`   | Caminho do arquivo de texto a ser processado    |
| `-d, --destino` | Pasta onde o arquivo `resultado.txt` será salvo |
| `-V, --version` | Exibe a versão do pacote                        |

O arquivo de saída será criado em `<destino>/resultado.txt` com um conteúdo como:

```
palavras duplicadas no parágrafo 1: teste, apenas
palavras duplicadas no parágrafo 2: ...
```

---

## 💡 Nota

O projeto foi desenvolvido como parte de um exercício das plataformas de aprendizado,
mas foi organizado como uma biblioteca para permitir fácil reuso. Sinta-se livre para
adaptar, expandir ou contribuir com melhorias!

---

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo `LICENSE` se disponível.
