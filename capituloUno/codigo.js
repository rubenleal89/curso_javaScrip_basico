let dineroRoberto = prompt("Cuanto dinero tienes Roberto");
let dineroPedro = prompt("Cuanto dinero tiene Pedro");
let dineroCoflan = prompt("Cuanto dinero tiene Coflan");

let vueltos, palitoAgua = 0.6, palitoCrema = 1, heladix = 1.6;
let heladovich = 1.7, helardo = 1.8, poteHelados = 2.9;

// Roberto

if ((dineroRoberto >= palitoAgua) && (dineroRoberto < palitoCrema)){
    document.write("<br> Roberto te alcanza para: Palito de helado de agua");
}

else if ((dineroRoberto >= palitoCrema) && (dineroRoberto < heladix)){
    document.write("<br> Roberto te alcanza para:  Palito de helado de crema");
}

else if ((dineroRoberto >= heladix) && (dineroRoberto < heladovich)){
    document.write("<br> Roberto te alcanza para:  Bombón helado marca heladix");
}

else if ((dineroRoberto >= heladovich) && (dineroRoberto < helardo)){
    document.write("<br> Roberto te alcanza para:  Bombón helado marca heladovich");
}

else if ((dineroRoberto >= helardo) && (dineroRoberto < poteHelados)){
    document.write("<br> Roberto te alcanza para:  Bombón helado marca helardo ");
}

else if (dineroRoberto >= poteHelados){
    document.write("<br> Roberto te alcanza para:  Potecito de helado con confites o Pote de 1/4 K6");;
}

else {
    document.write("Roberto no tienes suficiente dinero");
}

// Pedro

if ((dineroPedro >= palitoAgua) && (dineroPedro < palitoCrema)){
    document.write("<br>Pedro te alcanza para: Palito de helado de agua");
}

else if ((dineroPedro >= palitoCrema) && (dineroPedro < heladix)){
    document.write("<br>Pedro te alcanza para: Palito de helado de crema");
}

else if ((dineroPedro >= heladix) && (dineroPedro < heladovich)){
    document.write("<br>Pedro te alcanza para: Bombón helado marca heladix");
}

else if ((dineroPedro >= heladovich) && (dineroPedro < helardo)){
    document.write("<br>Pedro te alcanza para: Bombón helado marca heladovich");
}

else if ((dineroPedro >= helardo) && (dineroPedro < poteHelados)){
    document.write("<br>Pedro te alcanza para: Bombón helado marca helardo ");
}

else if (dineroPedro >= poteHelados){
    document.write("<br>Pedro te alcanza para: Potecito de helado con confites o Pote de 1/4 K6");
}

else {
    document.write("<br> Pedro no tienes suficiente dinero");
}

// Coflan

if ((dineroCoflan >= palitoAgua) && (dineroCoflan < palitoCrema)){
    document.write("<br>Coflan te alcanza para:  Palito de helado de agua");
    vueltos = dineroCoflan - palitoAgua;
    document.write(`<br>Coflan sus vueltos son de ${vueltos}`);
}

else if ((dineroCoflan >= palitoCrema) && (dineroCoflan < heladix)){
    document.write("<br>Coflan te alcanza para: Palito de helado de crema");
    vueltos = dineroCoflan - palitoCrema;
    document.write(`<br>Coflan sus vueltos son de ${vueltos}`);
}

else if ((dineroCoflan >= heladix) && (dineroCoflan < heladovich)){
    document.write("<br>Coflan te alcanza para: Bombón helado marca heladix");
    vueltos = dineroCoflan - heladix;
    document.write(`<br>Coflan sus vueltos son de ${vueltos}`);
}

else if ((dineroCoflan >= heladovich) && (dineroCoflan < helardo)){
    document.write("<br>Coflan te alcanza para: Bombón helado marca heladovich");
    vueltos = dineroCoflan - heladovich;
    document.write(`<br>Coflan sus vueltos son de ${vueltos}`);
}

else if ((dineroCoflan >= helardo) && (dineroCoflan < poteHelados)){
    document.write("<br>Coflan te alcanza para: Bombón helado marca helardo ");
    vueltos = dineroCoflan - helardo;
    document.write(`<br>Coflan sus vueltos son de ${vueltos}`);
}

else if (dineroCoflan >= poteHelados){
    document.write("<br>Coflan te alcanza para: Potecito de helado con confites o Pote de 1/4 K6");
    vueltos = dineroCoflan - poteHelados;
    document.write(`<br>Coflan sus vueltos son de ${vueltos}`);
}

else {
    document.write("<br> Cofla no tienes suficiente dinero");
}