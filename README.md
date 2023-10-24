# Calculadora de Partidas Ranqueadas

Este é um código JavaScript para calcular o nível de um jogador com base em sua quantidade de vitórias e derrotas em partidas ranqueadas de um jogo. Este desafio foi desenvolvido como parte do curso na [Digital Innovation One (DIO)](https://digitalinnovation.one/).

## Como Funciona

A função `calcularNivel` aceita dois parâmetros: a quantidade de vitórias e a quantidade de derrotas do jogador. Com base nesses valores, ela calcula o saldo de vitórias (vitórias - derrotas) e determina o nível do jogador com base nas seguintes regras:

- Se o jogador tiver menos de 10 vitórias, ele é classificado como "Ferro".
- Se o jogador tiver entre 11 e 20 vitórias, ele é classificado como "Bronze".
- Se o jogador tiver entre 21 e 50 vitórias, ele é classificado como "Prata".
- Se o jogador tiver entre 51 e 80 vitórias, ele é classificado como "Ouro".
- Se o jogador tiver entre 81 e 90 vitórias, ele é classificado como "Diamante".
- Se o jogador tiver entre 91 e 100 vitórias, ele é classificado como "Lendário".
- Se o jogador tiver 101 ou mais vitórias, ele é classificado como "Imortal".

A função retorna uma mensagem que indica o saldo de vitórias e o nível do jogador.

## Como Utilizar

1. Clone este repositório ou copie o código JavaScript para um arquivo local (por exemplo, `calculadora-de-partidas-rankeadas.js`).

2. No código, você pode chamar a função `calcularNivel` e passar a quantidade de vitórias e derrotas do jogador como argumentos.

```javascript
const resultado = calcularNivel(60, 20);
console.log(resultado);
```

Certifique-se de substituir os valores de exemplo (60 e 20) pelos valores desejados.

Este é um desafio simples que demonstra o uso de variáveis, operadores, estruturas de decisão e funções em JavaScript para calcular o nível de um jogador com base em seu desempenho em partidas ranqueadas. Divirta-se!
