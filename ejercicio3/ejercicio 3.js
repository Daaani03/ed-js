let numero;
let numeros = [];
let i = 0;

numero = prompt(`introduzca numeros positivos(<1 para finalizar: )`);
numeros[i] = parseInt(numero);
i++;
while (numero >= 1) {
    numero = prompt(`introduzca numeros positivos(<1 para finalizar: )`);
    if (numero >= 1) {
        numeros[i] = parseInt(numero);
        i++;
    }
}

alert('numeros introducidos: ' + numeros);
alert('numeros pares: ' + numerospares(numeros));
alert('numeros impares: ' + numerosimpares(numeros));
alert('suma total: ' + sumatotal(numeros));
alert('Media: ' + sumatotal(numeros) / numeros.length);
alert('Mayor: ' + mayor(numeros));
alert('Menor: ' + menor(numeros));

function numerospares(n) {

    let numerospares = [];
    for (i = 0; i < n.length; i++) {
        if (n[i] % 2 == 0) {
            numerospares.push(n[i]);
        }
    }
    return numerospares;
}

function numerosimpares(n) {

    let numerosimpares = [];
    for (i = 0; i < n.length; i++) {
        if (n[i] % 2 != 0) {
            numerosimpares.push(n[i]);
        }
    }
    return numerosimpares;
}

function sumatotal(n) {
    let suma = 0;
    var media = 0;
    for (let i = 0; i < n.length; i++) {
        suma += n[i];
    }
    media = suma / n.length;
    return suma;
}

function mayor(n) {

    let mayor = n[0];
    for (i = 1; i < n.length; i++) {

        if (n[i] > mayor) {
            mayor = n[i];
        }
    }
    return mayor;
}

function menor(n) {
    let menor = n[0];
    for (i = 1; i < n.length; i++) {

        if (menor > n[i]) {
            menor = n[i];
        }
    }
    return menor;
}
