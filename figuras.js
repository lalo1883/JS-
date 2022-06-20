//Código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código del Triangulo

console.group("Triangulos");

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código de círculo

console.group("Circulo");

// const PI = Math.PI;

function diametroCiruclo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    return (radio * 2) * Math.PI;
}

function areacirculo(radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Aquí interactuamos con HTML

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)
}


function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)
}

//CIRCULO
function CalcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const diametro = diametroCiruclo(value);
    alert(diametro)
}

function CalcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function CalcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areacirculo(value);
    alert(area)
}
// TRIANGULO
function CalcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputBase");
    // const altura = document.getElementById("InputAltura");

    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    // const valuealtura = altura.valuealtura;

    const perimetroT = perimetroTriangulo(value1, value2, value3);
    alert(perimetroT)
}

function CalcularAreaTriangulo(){
    // const input1 = document.getElementById("InputTriangulo1");
    // const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputBase");
    const altura = document.getElementById("InputAltura");

    // const value1 = Number(input1.value);
    // const value2 = Number(input2.value);
    const value3 = Number(input3.value);
    const valuealtura = Number(altura.value);

    const perimetroT = areaTriangulo(value3, valuealtura);
    alert(perimetroT)
}

