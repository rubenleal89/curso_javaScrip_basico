let nombres = ["pedro","cristian","samuel","maria","jorge"];
document.write("<b> Elementos Originales:</b> " + nombres + "<br> <br>");

    //TRANFORMADORES

// resultado = nombres.pop(); // Jorge eliminado
// resultado = nombres.shift(); // Pedro aliminado
// document.write(resultado + "<br>");
// document.write(nombres);

// resultado = nombres.push("Ruben","Roberts");
// document.write(resultado + "<br>"); // Con variable solo devuelve la cantidad de elementos
// document.write(nombres); // Devuelve los elementos

// nombres.reverse(); // no es necesario colocarlo en una variable
// document.write(nombres);

// nombres.unshift("Ruben","Juan");
// document.write(nombres);

// nombres.sort(); // Orden alfabetico en este caso
// document.write(nombres);

// nombres.splice(1,2,"Ruben","Nicol"); // parametros (3): (dondeInicia, cuantosElimina, elementosAgregar)
// nombres.splice(1,2); // No es necesario usar todos los parametros.
// nombres.splice(2,0,"Ruben","Nicol"); // se pueden agregar elementos nuevos sin eliminar y en la posicion donde inicia
// document.write(nombres); // si quiere agregar elementos al final del array en el parametro (dondeInicia) seria (-1). Mejor usar (push)

    //ACCESORES

// let resultado = nombres.join(" - "); // de array a cadena de texto con el tipo de reparador que quiera
// document.write(resultado);
// let resultado = nombres.join("<br>Elementos: ");
// document.write("Elemento (solo para el primero): " + resultado);

// let resultado = nombres.slice(0,3); // parametros: (dondeInicia, dondeFinaliza). tra la posicion anterior de (dondeFinaliza)
// document.write(resultado); // resultado se vuelve un array. para ver todos solo colocar (dondeInicia).

    //REPETICION

// nombres.filter(function (nombre){ // Funciona igual que un (forEach) pero adional cumple condiciones
//     document.write(nombre + "<br>");
// }
// )

// resultado = nombres.filter(nombre => nombre.length > 5); // cumple la condicion y muestra (resultado) como un array
// document.write(resultado);

// nombres.forEach(function (nombre){  //Se ejecuta solo con funciones
//     document.write(nombre + "<br>");
// }
// )