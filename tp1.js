function limpiarPatente(texto) {
  if (texto === null) {
    texto = "";
  }

  return texto.trim().toUpperCase();
}

function validarPatente(patente) {
  return patente.length >= 6 && patente.length <= 7;
}

function pedirVelocidad() {
  let entrada = prompt("Ingrese la velocidad del vehículo en km/h:");
  let velocidad = Number(entrada);

  while (
    entrada === null ||
    entrada.trim() === "" ||
    isNaN(velocidad) ||
    velocidad < 0
  ) {
    entrada = prompt(
      "Velocidad inválida. Ingrese un número mayor o igual a 0:",
    );
    velocidad = Number(entrada);
  }

  return velocidad;
}

function calcularMulta(velocidad) {
  if (velocidad <= 110) {
    return 0;
  } else if (velocidad <= 130) {
    return 5000;
  } else {
    return 10000;
  }
}

let patente = limpiarPatente(prompt("Ingrese la patente del vehículo:"));

while (!validarPatente(patente)) {
  patente = limpiarPatente(
    prompt("Patente inválida. Ingrese entre 6 y 7 caracteres:"),
  );
}

let velocidad = pedirVelocidad();
let multa = calcularMulta(velocidad);

console.log(
  `Reporte: Vehículo ${patente} iba a ${velocidad} km/h. Multa: $${multa}`,
);
alert(`Reporte: Vehículo ${patente} iba a ${velocidad} km/h. Multa: $${multa}`);
