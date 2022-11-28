
// NOTA: NO se puede tener un OBJETO con el MISMO nombre de la CLASE.
// NOTA: Los objetos definirlos con (const)

class animal { // Creacion "Clase"
    constructor(especie, edad, color){ // En los parentesis del contructor se colocan los parametro de la clase
        this.especie = especie; // El (.especia) no es el parametro, el parametro esta despues del (=).
        this.edad = edad; // (this.) es la propiedad del objeto "Atributo", cuando coloco (this.), estoy seleccionado el objeto.
        this.color = color;
        this.informacion = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){ // Creacion de un metodo (funcion dentro de clase)
        document.write(this.informacion + "<br>")
    }
}

const perro = new animal ("perro", 5, "negro"); // el (new) lo que dice es que va a instancia un objeto de la clase (animal)

document.write(perro.informacion + "<br>"); // (this.) es el objeto, con el (new) creamos el objeto "perro"
                             // para llamar las propiedades del objeto se llama a perro.nameAtributo

const gato = new animal ("gato", 2, "marron");
const pajaro = new animal ("pajaro", 1, "azul");
const leon = new animal ("leon", 7, "naranja");

// document.write(gato.informacion + "<br>");
// document.write(pajaro.informacion + "<br>");
// document.write(leon.informacion + "<br>");

gato.verInfo(); // con esto simplificamos los document.write de arriba
pajaro.verInfo();
leon.verInfo();