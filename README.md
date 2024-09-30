# 🎉 Sistema de Sorteio de Equipes

Este projeto é um sistema de sorteio de equipes desenvolvido em JavaScript. O objetivo principal é aprimorar o conhecimento em programação web, utilizando HTML, CSS e JavaScript.

## 👨🏽‍💻 Desenvolvedor

+ Vagner Ferreira Lima Junior: [@vagnerflj](https://github.com/vagnerflj)

## Sumário

- [Introdução](#introdução)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Exemplos de Código](#exemplos-de-código)
- [Como Executar](#como-executar)
- [Contribuição](#contribuição)

## Introdução

Este sistema de sorteio foi criado para permitir que usuários gerem equipes de forma aleatória. A experiência foi focada na prática de conceitos de programação, manipulação do DOM e interatividade com o usuário.

## Funcionalidades

- Sorteio aleatório de equipes a partir de uma lista de participantes.
- Interface simples e intuitiva para entrada de dados.
- Exibição das equipes sorteadas de forma clara e organizada.

## Tecnologias Utilizadas

- **HTML**: Estruturação da página.
- **CSS**: Estilização do layout.
- **JavaScript**: Lógica de sorteio e manipulação do DOM.

## Estrutura do Projeto

O projeto contém os seguintes arquivos:

- **index.html**: Página principal do sistema de sorteio.
- **styles.css**: Estilos aplicados ao layout da página.
- **script.js**: Lógica do sorteio e manipulação da interface.

## Exemplos de Código

Aqui estão alguns trechos de código relevantes:

### script.js

```javascript
function sortearEquipes(participantes) {
    const shuffled = participantes.sort(() => 0.5 - Math.random());
    const equipes = [];
    
    while (shuffled.length) {
        equipes.push(shuffled.splice(0, 2)); 
    }
    return equipes;
}
```

### Como Executar
```bash
# 1. Clone o repositório
git clone https://github.com/vagnerflj/SorteioEquipes.git
cd SorteioEquipes

# 2. Abra o arquivo index.html em um navegador
```

### Contribuição

Sinta-se à vontade para fazer ajustes ou adicionar melhorias! Se você tem sugestões ou melhorias, envie um pull request.
