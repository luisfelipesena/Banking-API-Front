# Desafio 4 - Cubos Academy - Front-end

Esse desafio consiste na criação de uma API bem trabalhada de um banking o qual terceiriza um sistema de cobranças. Os usuários, após se cadastrarem na plataforma, podem cadastrar os clientes deles e criar uma cobrança para que os clientes paguem. Os clientes recebem um email com o link do boleto para pagar.

Além disso, nesta plataforma os usuários podem ver e buscar clientes, ver e buscar cobranças, marcar uma cobrança como paga, ver um resumo de todo o financeiro, dentre outras coisas que estarão mais detalhadas abaixo.

- Tecnologia:

  - React Jsx

  ![logo](https://camo.githubusercontent.com/fc91b16ed6408990dd91570c627295f5efe6f27bfb3c7b64e1d2ff1a6c7d2791/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f67757079352f70726f64756374696f6e2f636f6d70616e6965732f3330302f696d616765732f6a6f62732f3437393535302f32303230303930393039323033323139345f736f6369616c506963747572652e6a7067)

# Site (Deploy feito com Heroku)

[cubos-banking](https://cubos-banking.herokuapp.com/)

![home](https://cdn.discordapp.com/attachments/407006330843561985/784569761123532830/Tela_Principal.png)

![gifLogin](https://cdn.discordapp.com/attachments/407006330843561985/784569766882705478/ezgif.com-gif-maker_1.gif)

![gifHome](https://cdn.discordapp.com/attachments/407006330843561985/784569766534578206/ezgif.com-gif-maker.gif)

## Observação :

**_ Por enquanto ainda não foi desenvolvido totalmente os envios reais de email, todos caem to inbox do mailtrap _**
**_ O Gráfico da home não condiz com as finanças existentes _**
**_ Ainda falta adicionar a responsividade da table para celulares de tela menor _**

## Organização do Código:

- `App.css`
- `App.js`
- `src`
  - `assets`-> `images.svg` -> todas as imagens utilizadas
  - `components`
    - `cadastro` -> lógica e componentes de cadastro
    - `clientes` -> lógica e componentes de clientes
    - `cobrancas` -> lógica e componentes de cobrancas
    - `esqueci-senha` -> lógica e componentes de esqueci-senha
    - `home` -> lógica e componentes de home
    - `login` -> lógica e componentes de login
    - `pageStyle` -> componentes de todo o "estilo" == `html` das páginas
    - `trocar-senha` -> lógica e componentes de trocar-senha
  - `pages`
    - `login-cadastro`
      - `cadastro` -> container de todo cadastro
      - `esqueci-senha` -> container de todo esqueci-senha
      - `login` -> container de todo login
      - `trocar-senha` -> container de todo trocar-senha
      - `styles.css` -> estilos de todo os containers relacionados a `login-cadastro`
    - `main`
      - `clientes` -> container de todo clientes
      - `cobrancas` -> container de todo cobrancas
      - `home` -> container de todo home
      - `styles.css` -> estilos de todo os containers relacionados a `main`

## Desenvolvedores:

[Luis Felipe Sena](https://www.linkedin.com/in/luisfelipesena/)

[Guido Lime Bernal](https://www.linkedin.com/in/guido-bernal-6143421b0/)
