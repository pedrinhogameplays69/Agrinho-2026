function correta() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "✅ Excelente! Você entende os princípios do Agro 4.0.";
  resultado.style.color = "green";
}

function errada() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "❌ Resposta incorreta. Sustentabilidade exige tecnologia e preservação.";
  resultado.style.color = "red";
}
