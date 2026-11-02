let pantalla = document.getElementById("pantalla");

let primerNumero = 0;
let operador = "";
let esperandoSegundoNumero = false;

function agregar(valor) {
  if (pantalla.value === "0" || esperandoSegundoNumero) {
    pantalla.value = valor === "." ? "0." : valor;
    esperandoSegundoNumero = false;
  } else {
    if (valor === "." && pantalla.value.includes(".")) return;
    pantalla.value += valor;
  }
}

function seleccionarOperacion(op) {
  primerNumero = Number(pantalla.value);
  operador = op;
  esperandoSegundoNumero = true;
}

function calcular() {
  if (operador === "" || esperandoSegundoNumero) return;

  let segundoNumero = Number(pantalla.value);
  let resultado = 0;

  if (operador === "+") resultado = primerNumero + segundoNumero;
  if (operador === "-") resultado = primerNumero - segundoNumero;
  if (operador === "*") resultado = primerNumero * segundoNumero;
  if (operador === "/") {
    if (segundoNumero === 0) {
      pantalla.value = "No se puede dividir entre 0";
      operador = "";
      esperandoSegundoNumero = true;
      return;
    }
    resultado = primerNumero / segundoNumero;
  }

  pantalla.value = String(Number(resultado.toFixed(8)));
  operador = "";
  esperandoSegundoNumero = true;
}

function limpiar() {
  pantalla.value = "0";
  primerNumero = 0;
  operador = "";
  esperandoSegundoNumero = false;
}

function borrar() {
  if (esperandoSegundoNumero) return;
  pantalla.value = pantalla.value.length > 1
    ? pantalla.value.slice(0, -1)
    : "0";
}