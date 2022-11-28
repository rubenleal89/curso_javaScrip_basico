let tipoOperacion, num1, num2;

function suma(num1, num2){
    resultado = parseInt(num1) + parseInt(num2);
    return resultado;
}

function resta(num1, num2){
    resultado = parseInt(num1) - parseInt(num2);
    return resultado;
}

function multiplicacion(num1, num2){
    resultado = parseInt(num1) * parseInt(num2);
    return resultado;
}

function division(num1, num2){
    resultado = parseInt(num1) / parseInt(num2);
    return resultado;
}

tipoOperacion = prompt("Que operacion desea hacer (suma, resta, multiplicacion o division)");

if (tipoOperacion == "suma"){
    num1 = prompt("Digite el primer numero");
    num2 = prompt("Digite el segundo numero");
    resultado = suma(num1, num2);
    alert(`El resultado es ${resultado}`)
}

else if (tipoOperacion == "resta"){
    num1 = prompt("Digite el primer numero");
    num2 = prompt("Digite el segundo numero");
    resultado = resta(num1, num2);
    alert(`El resultado es ${resultado}`)
}

else if (tipoOperacion == "multiplicacion"){
    num1 = prompt("Digite el primer numero");
    num2 = prompt("Digite el segundo numero");
    resultado = multiplicacion(num1, num2);
    alert(`El resultado es ${resultado}`)
}

else if (tipoOperacion == "division"){
    num1 = prompt("Digite el primer numero");
    num2 = prompt("Digite el segundo numero");
    resultado = division(num1, num2);
    alert(`El resultado es ${resultado}`)
}

else {
    alert("¡ERROR!, no se ha encontrado su operacion");
}