
# Desafio Técnico - Frontend para Mercado Livre / Mercado Pago

Este repositório contém a solução para o desafio técnico proposto para a vaga de frontend no Mercado Livre / Mercado Pago. A seguir, são detalhados os requisitos, a estrutura do projeto e instruções para execução e desenvolvimento.

## Tecnologias Utilizadas

- **Cliente:**
  - HTML5
  - React com Next.js
  - CSS
  
- **Servidor:**
  - Node.js >= 14
  - Express

## Estrutura do Projeto

Os componentes primordiais de interface do projeto estão na pasta components, e nela unifiquei os testes para simplificar a chamada dos módulos. A pasta ./pages é a página que o NextJS usa para montar o sistema de roteamento.

Optei por utilizar CSS Modules, uma funcionalidade nativa do Next.js que permite a criação de estilos de forma modular e local, evitando conflitos de nome de classe e facilitando a manutenção do código.

Separei os hooks em uma pasta própria, assim como os types e utils, para manter a organização e a modularidade do projeto. Essa estrutura facilita a manutenção e a escalabilidade do código, permitindo que cada parte do projeto esteja bem isolada e facilmente acessível.

## Funcionalidades Implementadas

A aplicação possui três principais funcionalidades, cada uma com sua própria interface:

1. **Caixa de Pesquisa (/):** Permite ao usuário pesquisar produtos por nome.
2. **Resultado da Pesquisa (/items?search=:query):** Exibe os resultados da pesquisa com os produtos encontrados.
3. **Detalhes do Produto (/items/:id):** Mostra informações detalhadas de um produto específico.

## Decisões de Design e Considerações

### Por que Typescript?

- **Tipagem Estática:** Escolhi TypeScript por suas vantagens em relação ao JavaScript. TypeScript é um superset de JavaScript que adiciona tipagem estática, o que ajuda a detectar erros em tempo de desenvolvimento, antes mesmo de executar o código. Isso melhora a qualidade do código e reduz o número de bugs em produção.
  
### Por que Next.js?

Next.js é um framework poderoso para React que oferece várias vantagens significativas, especialmente para aplicações que exigem alta performance e SEO otimizado. As principais razões para escolher Next.js incluem:

- **Renderização do Lado do Servidor (SSR):** Next.js facilita a implementação de SSR, o que melhora significativamente o SEO, pois o conteúdo é renderizado no servidor antes de ser enviado ao cliente. Isso permite que os motores de busca indexem o conteúdo mais eficientemente.
- **Renderização Estática (SSG):** Além da SSR, Next.js também suporta geração de sites estáticos (SSG), onde as páginas são pré-renderizadas em tempo de build, resultando em tempos de carregamento extremamente rápidos e uma experiência de usuário fluída.
- **Roteamento Simples:** Next.js simplifica o roteamento baseado em páginas, onde cada arquivo no diretório `pages/` automaticamente se torna uma rota, eliminando a necessidade de configurar manualmente as rotas.
- **Performance:** Next.js é otimizado para performance, com suporte embutido para otimização de imagens, carregamento dinâmico e split de código, resultando em uma aplicação rápida e eficiente.
- **Facilidade de Uso:** A configuração inicial de um projeto Next.js é simples, permitindo que os desenvolvedores comecem rapidamente, e sua integração com React facilita a criação de componentes reutilizáveis e manutenção do código.
- **API Routes:** Next.js suporta a criação de API endpoints dentro do diretório `pages/api`, permitindo a construção de uma aplicação full-stack com apenas um framework.

### Separação clara entre frontend e backend

Utilização do conceito de Backend for Frontend (BFF) para separar as responsabilidades entre o cliente Next.js e o servidor Express, promovendo uma arquitetura mais organizada e modular.

### Decisão de Uso: Vitest e React Testing Library

#### Por que Vitest?

Vitest é uma ferramenta de teste moderna e de alto desempenho, desenvolvida para funcionar perfeitamente com projetos que utilizam Vite, um bundler de próxima geração para JavaScript. A escolha de Vitest traz várias vantagens, incluindo:

- **Performance:** Vitest é extremamente rápido devido ao seu design e integração com Vite, proporcionando feedback rápido durante o desenvolvimento.
- **Configuração Simplificada:** Integrar Vitest em projetos que usam Vite é direto e fácil, reduzindo o tempo gasto na configuração inicial dos testes.
- **Compatibilidade:** Vitest é totalmente compatível com o ecossistema de testes de JavaScript, suportando diversas bibliotecas e ferramentas comuns de teste.

#### Por que React Testing Library?

React Testing Library é uma biblioteca focada em testes que simulam a forma como os usuários interagem com a aplicação. As vantagens de usar React Testing Library incluem:

- **Testes Baseados em Usuário:** Em vez de testar detalhes de implementação, React Testing Library promove testes que se concentram no comportamento e na experiência do usuário, resultando em testes mais robustos e menos propensos a quebras com mudanças no código.
- **Simplicidade:** A API do React Testing Library é simples e fácil de aprender, permitindo que os desenvolvedores escrevam testes eficazes rapidamente.
- **Boas Práticas:** A biblioteca incentiva o uso das melhores práticas de testes, como evitar testes frágeis e focar na acessibilidade.

#### Vantagens da Combinação

A combinação de Vitest e React Testing Library oferece uma série de vantagens para o desenvolvimento e a manutenção de testes em um projeto Next.js:

- **Feedback Rápido:** Com Vitest, os testes são executados rapidamente, o que acelera o ciclo de desenvolvimento e permite que os desenvolvedores recebam feedback imediato sobre suas mudanças.
- **Testes Focados no Usuário:** React Testing Library garante que os testes se concentrem na interação do usuário com a interface, melhorando a confiabilidade dos testes e garantindo uma melhor cobertura das funcionalidades da aplicação.
- **Facilidade de Configuração e Uso:** A integração entre Vitest e React Testing Library é simples, permitindo que os desenvolvedores configurem e comecem a escrever testes rapidamente.
- **Manutenção Reduzida:** Testes focados na experiência do usuário tendem a ser menos frágeis e mais resistentes a mudanças na implementação, reduzindo o tempo gasto na manutenção de testes ao longo do tempo.

#### Exemplo de Configuração

Para configurar Vitest e React Testing Library no projeto, siga os passos abaixo:

1. **Instalação das Dependências:**

   *npm i*

2. **Para rodar:**

   *npm run dev*

3. **Para testar:**

   *npm run test*

4. **Para acessar o projeto usando o link da Vercel clique [aqui](https://meli-frontend-seven.vercel.app/).**
   
   
