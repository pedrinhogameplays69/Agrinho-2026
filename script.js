function correta() {
  const res = document.getElementById("resultado");
  res.innerText = "✅ Excelente! Você entende os princípios do Agro 4.0.";
  res.style.color = "#1b5e20";
  res.style.fontWeight = "bold";
}

function errada() {
  const res = document.getElementById("resultado");
  res.innerText = "❌ Resposta incorreta. Sustentabilidade exige tecnologia e preservação.";
  res.style.color = "#d32f2f";
  res.style.fontWeight = "bold";
}
