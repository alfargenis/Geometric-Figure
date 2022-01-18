// Código del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triángulo

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(lado1, base) {
    var beforeCalculo = Math.pow(lado1,2) - Math.pow((base / 2),2);
    var altura = Math.sqrt(beforeCalculo);
    return (base * altura) / 2;
}

// Código del círculo

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// Circunferencia
function perimetroCirculo(radio) {
    const PI = Math.PI;
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
    const PI = Math.PI;
  return (radio * radio) * PI;
}

// Aquí interactuamos con el HTML //



//-----------CUADRADO-------------//
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

//-----------TRIANGULO-------------//
function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
  }
  function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo2");
    const input2 = document.getElementById("InputTriangulo3");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);

    const area = areaTriangulo(value1, value2);
    alert(area);
  }

  //-----------CIRCULO-------------//
function calcularDiametroCirculo() {
    const input1 = document.getElementById("InputCirculo");
    const value1 = parseInt(input1.value);

    const diametro = diametroCirculo(value1);
    alert(diametro);
  }
  function calcularPerimetroCirculo() {
    const input1 = document.getElementById("InputCirculo");
    const value1 = parseInt(input1.value);

    const perimetro = perimetroCirculo(value1);
    alert(perimetro);
  }
  function calcularAreaCirculo() {
    const input1 = document.getElementById("InputCirculo");
    const value1 = parseInt(input1.value);

    const area = areaCirculo(value1);
    alert(area);
  }