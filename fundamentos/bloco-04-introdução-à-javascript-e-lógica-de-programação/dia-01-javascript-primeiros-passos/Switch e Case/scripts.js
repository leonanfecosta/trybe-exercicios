let processo = "aprovado";

switch (processo) {
  case "aprovado":
    console.log("Parabéns, voce foi aprovado!");
    break;

  case "lista":
    console.log("Você está na lista de epera.");
    break;

  case "reprovado":
    console.log("Você foi reprovado!");
    break;

  default:
    console.log("Não se aplica");
    break;
}
