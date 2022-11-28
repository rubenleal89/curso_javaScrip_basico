
// NOTA: NO se puede tener un OBJETO con el MISMO nombre de la CLASE.
// NOTA: Los objetos definirlos con (const)

class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;
    }
    verInfo(){
        document.write(this.info + "<br>")
    }
}

class Perro extends Animal { // La clase perro tiene objetos heredados de animal (Herencia)
    constructor(especie,edad,color,raza){ // Al ser herencia, toma los mismo atributos y objetos de la anterior clase
        super(especie,edad,color);
        this.raza = raza; // se puede agregar mas atributos, parametros y metodos
    }
    ladrar(){
        alert("¡WAW!")
    }
}

const perro = new Perro ("perro",5, "negro", "doberman");
const gato = new Animal ("gato",2,"marron");
const pajaro = new Animal("pajaro",1,"verde");

perro.ladrar();
// gato.ladrar(); //esto no funcionara, porque gato fue llamado con la clase (Animal)
gato.verInfo();
pajaro.verInfo();