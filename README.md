# PhysioSearch

## Descrição

**PhysioSearch** é um projeto proposto por um grupo de estudantes de fisioterapia com o objetivo de facilitar o estudo e a visualização do corpo humano. O sistema permite que os estudantes visualizem um esqueleto 2D interativo, onde podem aplicar zoom, manipular a imagem e acessar informações detalhadas de áreas específicas do corpo. Cada parte clicável do esqueleto redireciona os usuários para uma visualização mais detalhada da área, que inclui links para artigos e tratamentos relacionados.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- [**React**](https://reactjs.org/): Uma biblioteca JavaScript para construir interfaces de usuário.
- [**Vite**](https://vitejs.dev/): Um bundler rápido e moderno que melhora o desenvolvimento e a performance de aplicações React.
- [**ShadCN**](https://shadcn.dev/): Um conjunto de componentes React estilizados com Tailwind CSS.
- [**Tailwind CSS**](https://tailwindcss.com/): Uma biblioteca de CSS utilitária que permite uma estilização rápida e customizável.
- [**TypeScript**](https://www.typescriptlang.org/): Um superconjunto de JavaScript que adiciona tipos estáticos, melhorando a manutenção do código.
- [**SCSS**](https://sass-lang.com/): Um pré-processador CSS que permite mais flexibilidade e organização na criação de estilos.
- [**React Pinch Zoom**](https://www.npmjs.com/package/react-zoom-pan-pinch): Uma biblioteca para permitir zoom e pan de imagens no React.

## Funcionalidades

- Visualização interativa de um esqueleto humano em 2D.
- Zoom e movimentação da imagem utilizando gestos.
- Áreas clicáveis no esqueleto que levam a visualizações detalhadas.
- Links para artigos e tratamentos específicos baseados nas áreas clicadas.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js versão 14 ou superior
- Gerenciador de pacotes (NPM ou Yarn)

### Passos para iniciar

1. Clone o repositório:
    
    ```bash
    git clone https://github.com/ythiago03/physiosearch.git
    cd physiosearch
    
    ```
    
2. Instale as dependências:
    
    ```bash
    npm install
    
    ```
    
    ou
    
    ```bash
    yarn install
    
    ```
    
3. Execute o projeto em modo de desenvolvimento:
    
    ```bash
    npm run dev
    
    ```
    
    ou
    
    ```bash
    yarn dev
    
    ```
    
4. Abra o navegador e acesse:
    
    ```bash
    http://localhost:5173
    
    ```
    

## Estrutura do Projeto

- **src/**
    - **components/**: Contém os componentes reutilizáveis da aplicação.
    - **assets/**: Imagens e outros arquivos estáticos.
    - **styles/**: Arquivos SCSS e Tailwind CSS.
    - **pages/**: Páginas principais da aplicação.
    - **App.tsx**: Componente principal da aplicação.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.
