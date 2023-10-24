function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "Ferro";

  if (vitorias >= 101) nivel = "Imortal";
  else if (vitorias >= 91) nivel = "Lendário";
  else if (vitorias >= 81) nivel = "Diamante";
  else if (vitorias >= 51) nivel = "Ouro";
  else if (vitorias >= 21) nivel = "Prata";
  else if (vitorias >= 11) nivel = "Bronze";

  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

const resultado = calcularNivel(60, 20);
console.log(resultado);
