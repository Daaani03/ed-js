let n;
n = prompt('Introduce el maximo de numeros:' );


    let primos = esPrimo(n);
    let palindromos= esPalindromo(n);
   
    alert('Numeros primos: '+primos);
    alert('Números palindromos:' +palindromos);
  

function esPrimo(n) {
    let primos = [];
    for (i = 2; i <= n; i++) {
        j = 2;
        while (i % j != 0) {
            j++;
        }
        if (i == j) {
            primos.push(i);
        }
    }
    return primos;
}

function esPalindromo(n){
    let palindromos = [];
    for(i= 1; i<=n; i++){
        let aux=i.toString();
        let aux1=aux.split('').reverse().join('');
        if(aux === aux1){
            palindromos.push(i);
        }
    }
    return palindromos;
}
