// Primero cree los Arrays, para los nombres de los alumnos, los dias presentes y ausentes inicializados en 0
let alumnos = ["Cofla","Ruben","Brayan","Gabriel","Karla","Vanesa","Jefferson","Nicol","Fernanda","Cristian","Jaider","Britny","Juan","Mateo","Marcela","Samuel","Alexis","Paola","Michel"];
let presentes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let ausentes = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

console.log(alumnos,length); // con el (alumnos,length) me mustra los valores del Array

function tomaAsistencia(){ // creo funcion para tomar asistencia
    for (i=0; i < alumnos.length; i++){  // el (alumnos,length) hace referencia al numero total de posiciones de mi Array
        let tomaLista = prompt(`¿${alumnos[i]} esta presente (marque (P)) o Ausente (marque (A))`);
        if (tomaLista == "P" || tomaLista == "p"){
            presentes[i] += 1;
        }

        else if (tomaLista == "A" || tomaLista == "a") {
            ausentes[i] += 1;
        }

        else {
            alert ("No se tomo asistencia, letra equivocada");
        }
    }
}

let numDias = prompt("Digite el numero de dias a tomar asistencia"); // pregunto el numero de dias (no necesario).

for (d=0; d < numDias; d++){ // recorro la funcion con el numero dias (30)
    tomaAsistencia();
}

for (t=0; t < alumnos.length; t++){ // imprimo el mensaje de total de asistencia de cada alumno
    document.write(`${alumnos[t]} tiene un total de asistencias <br> presentes de: ${presentes[t]} <br> ausencias de: ${ausentes[t]} <br>`);
    if(ausentes[t] > 18){ // (18) es el 10% de dias de un semestre que tiene (180 dias)
        document.write(`${alumnos[t]} usted esta reprobado por tener mas del 10% de ausencias <br> <br>`);
    }
}
