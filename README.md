# Projeto Funiro

## Visão Geral
Este é um projeto de e-commerce desenvolvido em React e TypeScript, com integração de Redux para gerenciamento de estado, e Clerk para autenticação. O objetivo do projeto é criar uma plataforma de e-commerce funcional e responsiva.

## Objetivos alcançados

- **Links**: Todos os links obrigatórios foram colocados e emcaminham para seus respectivos lugares.
- **Ferramentas**: Foi utilizado no projeto todas ferramentas obrigatórias.
- **Renderização**: O site foi todo otimizado para atender com agilidade e em tempo real as requisições.
- **Paginação e Filtragem**: Foi realizada a paginação e filtragem de produtos na pagina Shop, com uso de Redux e Json.server.
- **Loading**: Como as imagens e as páginas são carregada rapidamente, para esse requisito usei o carregamento das páginas para mostrar o loading.
- **Clerck**: Foi implementado para autenticação de usuário, assim como mante-lo logado.
- **Rotas**: A rota foram criadas com React Router, sendo protegida a página de Checkout.
- **ViaCep**: foi implementada a requisicao da ViaCep para o formulário de endereço do Checkout.
- **EC2 AWS**: Para fim de comprir com os requisitos, gravei um video da instancia funcionando e atraves do link da instancia rodando o meu projeto, a maquina usada foi o Linux Server, segue link do video: https://youtu.be/sp_3i4331Lw.
- **Organização**: As pastas foram organizadas de forma intuitiva e de fácil localização dos componentes, divida em Component e Pages como suas principais, Components tem o objetivo de usar componentens que aparece em mais de uma página, Pages são as paginas do site, tambem encontra-se as pastas Redux Public (onde esta o db.json).
- **Codigo**: Foi tentado ao máximo seguir a padronização do código,  respeitando as regras de tipagem do Typescript. A componetização teve como propósito o principio da modularização.

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Redux**: Biblioteca para gerenciamento de estado.
- **Clerk**: Plataforma de autenticação de usuários.
- **React Router**: Biblioteca para gerenciamento de rotas.
- **Tailwind CSS**: Framework de CSS para estilização.
- **Giphy API**: Para exibição de GIFs de carregamento.
- **EsLint**: 
- **Prettier**:
- **Json Server**: 
- **Splide**:
- **React Modal**:
- **Icones Externos**:

## Funcionalidades
- **Autenticação de Usuário**: Implementada com Clerk.
- **Gerenciamento de Produtos**: Com Redux para manter o estado global.
- **Carregamento de Páginas**: Indicador de carregamento para a página inicial.
- **Carrinho de Compras e Checkout**: Funcionalidade completa de carrinho de compras.
- **Página de Contato**: Formulário de contato com validação e modal de confirmação.
- **Sistema de Filtros e Paginação**: Na página de loja.
- **Carrousel de imagems**: para a pagina da Home;
- **Calculo em tempo de execução**: para todos items que envolvem os cards;

## Instalação e Execução
Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone este repositório:
   ```bash
   https://github.com/Douglas1705/CompassUOL-Challenge3-Furniro.git

2. Instale Npm dentro da pasta do projeto:
    ```bash
   npm ..
   
3. Para json.server:
    ```bash
   cd C:../public

4. Para rodar o db.json:
    ```bash
    json-server --watch db.json --port 3001

5. Se necessário instalar o Json server:
    ```bash
    npm install json-server --save-dev

6. Se necessário instalar o Clerck:
    ```bash
    npm install @clerk/clerk-react

7. Se necessário instalar React-Modal:
    ```bash
    npm install react-modal

   
