# Cadastro e Gerenciamento de Produtos

Este projeto consiste em um sistema para cadastro e gerenciamento de produtos. Ele é dividido em duas partes principais: o frontend (interface do usuário) e o backend (API para manipulação dos dados).
Estrutura do Projeto
Frontend

O frontend é responsável por oferecer uma interface amigável para que o usuário possa cadastrar produtos e visualizar a lista de produtos cadastrados. Ele foi desenvolvido utilizando HTML, CSS e JavaScript.
Principais Recursos:

Cadastro de produtos: Formulário para inserção de nome, valor e disponibilidade do produto.
Exibição de produtos: Tabela que lista todos os produtos cadastrados, incluindo nome e valor formatado em moeda brasileira (R$).
Validação: Verifica se todos os campos do formulário foram preenchidos antes de enviar os dados.

Localização dos Arquivos:

    HTML: public/index.html
    CSS: public/styles/index.css
    JavaScript:
        public/scripts/cadastro.js: Para o cadastro de produtos.
        public/scripts/listagem.js: Para exibir os produtos.

### Backend

O backend é uma API REST desenvolvida em Node.js utilizando o framework Express. Ele manipula os dados dos produtos enviados pelo frontend e os armazena.
Principais Recursos:

    Cadastrar produto: Endpoint para receber e salvar os dados de um novo produto.
    Listar produtos: Endpoint para retornar todos os produtos cadastrados.

Estrutura do Backend:

    Roteamento: routes/productsRoutes.js — Define as rotas relacionadas aos produtos.
    Servidor: Backend/app.js — Configura o servidor e registra os middlewares.

Dependências Utilizadas:

    Frontend: Nenhuma dependência adicional foi necessária.
    Backend:
        express: Framework para criação do servidor.
        cors: Middleware para habilitar o CORS e permitir comunicação entre frontend e backend.

## Como Executar o Projeto
Requisitos:

    Node.js instalado na máquina.

Passos para Configuração:

Clone o Repositório:

    git clone <URL_DO_REPOSITORIO>
    cd <PASTA_DO_PROJETO>

Configuração do Backend:

Navegue até a pasta Backend.
Instale as dependências:

    npm install

Inicie o servidor:

    node app.js

O servidor estará rodando em http://localhost:8000.

## Configurar o Frontend:

Navegue até a pasta public.
Use um servidor estático para abrir os arquivos. Por exemplo, com o live-server:

live-server

O frontend estará acessível no navegador, geralmente em http://127.0.0.1:5500 ou outra URL definida.

Funcionalidades
Cadastro de Produtos:

O usuário insere o nome, o valor e a disponibilidade do produto.
 Os dados são enviados para o backend e armazenados.

### Listagem de Produtos:

A lista de produtos é carregada dinamicamente na página, buscando os dados do backend.
Os produtos são exibidos em ordem crescente utilizando o algoritmo Quick Sort.
Os produtos são exibidos dinamicamente em uma tabela formatada, com os preços em R$.

Estrutura de Endpoints da API

Base URL: http://localhost:8000/products
Endpoints Disponíveis:

POST /products/save
    
        Descrição: Salva um novo produto no arquivo products.json.
        Requisição:

        {
          "name": "Produto 1",
          "price": 19.99,
          "avaliability": "Disponível"
        }

GET /products

    Descrição: Retorna a lista de produtos cadastrados no arquivo products.json.
    Resposta:

        [
          {
            "name": "Produto 1",
            "price": 19.99,
            "avaliability": "Disponível"
          }
        ]

Desenvolvido com 💻 por Andrelzinn.
