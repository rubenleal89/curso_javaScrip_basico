
class celulares {
    constructor(nombre,color,peso,resolucionP,resolucionC,ram){
        this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.resolucionP = resolucionP;
        this.resolucionC = resolucionC;
        this.ram = ram;
        this.info = `Las caracteristicas del celular son:<br> Nombre: ${this.nombre}<br> Color: ${this.color}<br>
        Peso: ${this.peso} Kg<br>Resolucion Pantalla: ${this.resolucionP}<br> Camara: ${this.resolucionC} MP<br> Ram: ${this.ram} GB`;
    }
    verInfoMovil(){
        document.write(this.info + "<br><br>");
    }
    funBasicas() {
        let opciones;
        let apagado = false;
        let encendido = false;
        while(opciones =="1" || opciones=="2" || opciones =="3" || opciones =="4" || opciones =="5" || opciones == undefined){
            opciones = prompt("Que funcion quiere ejecutar: Encerder (1) - Tomar Foto (2) - Grabar Video (3) - Reiniciar (4) - Apagar (5) - Cerrar funciones basicas (X)");
            if(opciones == "1"){
                if(encendido == false){
                    alert("Celular prendido");
                    encendido = true;
                    apagado = false;
                }
                else {alert ("Celular ya encendido")}
            }
            else if(opciones == "2"){
                alert(`Foto tomada con resolucion ${this.resolucionC} MP`);
            }
            else if(opciones == "3"){
                alert(`Video grabado con resolucion ${this.resolucionC} MP`);
            }
            else if(opciones == "4"){
                alert("Reiniciando Celular");
            }
            else if(opciones == "5"){
                if(apagado == false){
                    alert("Celular apagado");
                    apagado = true;
                    encendido = false;
                }
                else {alert ("Celular ya apagado")}
            }
            else {
                alert("Celular Probado Con Exito")
            }
        }
    }
}

class celularesGamaAlta extends celulares { // Solucion del Problema B
    constructor(nombre,color,peso,resolucionP,resolucionC,ram,camaraLenta,recoFacial,camaraExtra){
        super (nombre,color,peso,resolucionP,resolucionC,ram);
        this.camaraLenta = camaraLenta;
        this.recoFacial = recoFacial;
        this.camaraExtra = camaraExtra;
        this.info = `Las caracteristicas del celular son:<br> Nombre: ${this.nombre}<br> Color: ${this.color}<br>
        Peso: ${this.peso} Kg<br>Resolucion Pantalla: ${this.resolucionP}<br> Camara: ${this.resolucionC} MP<br> Ram: ${this.ram} GB`;
    }
    funPlus(){
        let opciones;
        while(opciones =="1" || opciones=="2" || opciones =="3" || opciones == undefined){
            opciones = prompt("Que funcion Plus quiere ejecutar: Grabar en camara lenta (1) - Activar reconocimiento facial (2) - Activar camara secundaria (3) - Salir (X)");
            if(opciones == "1"){
                alert("Grabando en camara lenta")
            }
            else if (opciones == "2"){
                alert("reconocimiento facial activado, diga whiski")
            }
            else if (opciones == "3"){
                alert("Camara secundaria encendida")
            }
            else {
                alert("Funciones Plus probadas con exito")
            }
        }
    }   
}

const celular1 = new celulares ("Xiaomy","Rojo",5,"HD",20,32);
const celular2 = new celulares ("Huawei","Negro",2,"HD",18,32);
const celular3 = new celulares ("LG","Gris",4,"HD",30,64);
// Objetos Problema 2
const celular1GA = new celularesGamaAlta ("Iphone","Dorado",5,"Full HD",40,62);
const celular2GA = new celularesGamaAlta ("Samsung","Plateado",6,"Full HD",35,62);

tipoCelular=null;
while(tipoCelular ==="1" || tipoCelular ==="2" || tipoCelular ==="3" || tipoCelular ==="4" || tipoCelular ==="5" || tipoCelular ===null){
    tipoCelular=prompt("En que celular quieres probar sus funciones basicas. celular gama baja: (1) (2) (3) - celulares gama alta: (4) (5) Cerrar: X")
    if(tipoCelular === "1"){
        celular1.funBasicas();
        celular1.verInfoMovil();  
    }
    else if(tipoCelular === "2"){  
        celular2.funBasicas();
        celular2.verInfoMovil();
    }
    else if(tipoCelular === "3"){
        celular3.funBasicas();
        celular3.verInfoMovil();
    }
    // Condiciones del problema 2
    else if(tipoCelular === "4"){
        celular1GA.funBasicas();
        celular1GA.funPlus();
        celular1GA.verInfoMovil();
    }
    else if(tipoCelular === "5"){
        celular2GA.funBasicas();
        celular2GA.funPlus();
        celular2GA.verInfoMovil();
    }
    else {
        alert("Gracias por participar");
    }
}