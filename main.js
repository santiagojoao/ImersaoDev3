function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11);
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Somente de números de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Você errou, o número era " + numeroSecreto;
  }
}
