
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

class Perro extends Animal {
    constructor(especie,edad,color,raza){
        super(especie,edad,color);
        this.raza = null;
    }
    // modificarRaza(){  // No se recomienda hacer esto, mejor usar (set o get)
    //     this.raza = "pedro";
    // }

    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

const perro = new Perro ("perro",5, "negro", "doberman");
const gato = new Animal ("gato",2,"marron");
const pajaro = new Animal("pajaro",1,"verde");

// perro.setRaza("Pedro");  //aca no funciono es set, porque estos son tomados como propiedades
perro.setRaza = "Pedro "; // por eso es recomendable mandalos a llamar asi.
document.write(perro.raza);

document.write(perro.getRaza); // asi se mandan a imprimir los get