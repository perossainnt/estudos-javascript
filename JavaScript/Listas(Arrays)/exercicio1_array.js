// 1) Crie um programa que dado um número imprima a sua tabuada.

const impar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= impar.length; i++) {
    //console.log('2 x '+i+" = " + (2*i)); -> tabuada de 2 x
    const impares = impar[i];
    if ((impares % 2) == 1){
        console.log(`Os números impares são: ${impares}`)
    }
}

const par = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i <= par.length; i++) {
    //console.log('3 x '+i+" = " + (3*i)); -> tabuada de 3 x
    const pares = par[i];
    if ((pares % 2) == 0){
        console.log(`Os números pares são: ${pares}`)
    }
}