
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
    // constructor(especie,edad,color,raza){
    //     super(especie,edad,color);
    //     this.raza = raza;
    // }
    static ladrar(){
        alert("¡WAW!")
    }
}

// const perro = new Perro ("perro",5, "negro", "doberman");
// perro.ladrar();

Perro.ladrar(); // (static) es para cuando vamos a crear un metodo, pero no es necesario los atributos y parametros.
                // asi ya no es necesario crear el objeto y llamar la clase con (new), simplemente llamando la clase y el metodo con (static)