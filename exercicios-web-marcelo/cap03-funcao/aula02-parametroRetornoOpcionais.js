function limiteArea(larg, comp) {
  const area = larg * comp;
  if (area > 200) {
    return `Área acima do permitido: ${area}m2`;
  }
  return `Área: ${area}m2`;
}

console.log(limiteArea(10, 20));
console.log(limiteArea(10));
console.log(limiteArea());
console.log(limiteArea(15, 20, 30));
console.log(limiteArea(20, 20));
