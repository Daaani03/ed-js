var cadena, numeropatrones;
var patrones = ["AA", "BCA", "RTB", "JT"]

cadena = prompt("Introduce una cadena: ");

numeropatrones = encontrarPatron(cadena, patrones)

alert('Cadena introducida:' + cadena);
alert('Patrones a buscar: ' + patrones);
alert('aparecen:' + numeropatrones);

function encontrarPatron(cadena, patrones) {
    let veces = 0,pos;
    cadena=cadena.toLowerCase();
    for(i=0;i<patrones.length;i++){
        pos=cadena.indexOf(patrones[i].toLowerCase());
        while(pos!=-1){
            veces++;
            pos=cadena.indexOf(patrones[i].toLowerCase(),pos+1);
        } 
    }
    return veces;

}