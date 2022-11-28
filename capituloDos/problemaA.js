entradaGratis = false;

const entrada = (time) =>{
    let edad = prompt("Hola, cuantos años tienes")
    if(edad > 18){
        if(time >= 2 && time < 5 && entradaGratis == false){
            alert ("Bienbenido, puede pasar gratis");
            entradaGratis = true;
        }
        else{
            alert ("Bienbenido, puede pasar, pero tienes que pagar");
        }
    }
    else {
        alert ("Lo siento, no puedes entrar");
    }
}


for (horaEntrada=1; horaEntrada < 7; horaEntrada++){
    horaEntrada = prompt("Digite la hora de entrada");
    entrada(horaEntrada);
}

document.write("Fin de la Fiesta");
