let Matematicas = [];
let Diseño = [];
let Informatica = [];
let materias = [Matematicas,Diseño,Informatica];

let materiaIncribir = prompt("Selecciones la materia en la que se desea incribir: Matematicas(1) - Diseño(2) - Informatica(3) ");

while(Matematicas < [3] && Diseño < [3] && Informatica < [3]){
    let nameAlumno = prompt("Digite su nombre");
if (materiaIncribir == "1" && Matematicas < [3]){
    nameAlumno = nameAlumno.toLowerCase();
    Matematicas.push(nameAlumno);
}
else if (materiaIncribir == "2" && Diseño < [3]){
    nameAlumno = nameAlumno.toLowerCase();
    Diseño.push(nameAlumno);
}
else if (materiaIncribir == "3" && Informatica < [3]){
    nameAlumno = nameAlumno.toLowerCase();
    Informatica.push(nameAlumno);
}
else {
    alert("Alumno ya inscripto");
}
materiaIncribir = prompt("Selecciones la materia en la que se desea incribir: Matematicas(1) - Diseño(2) - Informatica(3) ");
}