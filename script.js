function botaocalcular() {
  var peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
  var altura = parseFloat(document.getElementById("altura").value.replace(",", "."));

  if (peso && altura) {
      var imc = peso / (altura * altura);
      var classificacao = "";

      if (imc < 18.5) {
          classificacao = "Magreza";
      } else if (imc >= 18.5 && imc <= 24.9) {
          classificacao = "Normal";
      } else if (imc >= 25 && imc <= 29.9) {
          classificacao = "Sobrepeso";
      } else {
          classificacao = "Obesidade";
      }

      document.getElementById("imc").textContent = imc.toFixed(2);
      document.getElementById("classificacao").textContent = classificacao;

      document.getElementById("resultado").classList.remove("hide");
  } else {
      alert("Por favor, preencha os campos corretamente.");
  }
}
