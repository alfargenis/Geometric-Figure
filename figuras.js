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
  //alert(perimetro);
  document.getElementById("resultadoCuadrado").innerHTML = "Resultado: El perimetro es de " + perimetro + "cm";
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  document.getElementById("resultadoCuadrado").innerHTML = "Resultado: El area es de " + area + "cm";
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
    document.getElementById("resultadoTriangulo").innerHTML = "Resultado: El perimetro es de " + perimetro + "cm";
  }
  function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo2");
    const input2 = document.getElementById("InputTriangulo3");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);

    const area = areaTriangulo(value1, value2);
    document.getElementById("resultadoTriangulo").innerHTML = "Resultado: El area es de " + area + "cm";
  }

  //-----------CIRCULO-------------//
function calcularDiametroCirculo() {
    const input1 = document.getElementById("InputCirculo");
    const value1 = parseInt(input1.value);

    const diametro = diametroCirculo(value1);
    document.getElementById("resultadoCirculo").innerHTML = "Resultado: El diametro es de " + diametro + "cm";
  }
  function calcularPerimetroCirculo() {
    const input1 = document.getElementById("InputCirculo");
    const value1 = parseInt(input1.value);

    const perimetro = perimetroCirculo(value1);
    document.getElementById("resultadoCirculo").innerHTML = "Resultado: La circunferencia es de " + perimetro + "cm";
  }
  function calcularAreaCirculo() {
    const input1 = document.getElementById("InputCirculo");
    const value1 = parseInt(input1.value);

    const area = areaCirculo(value1);
    document.getElementById("resultadoCirculo").innerHTML = "Resultado: El area es de " + area + "cm";
  }