

/*
const alunos = ['Pedro', 'Biltis', 'Marta'];

alunos.push('Anibal'); // Adiciona elementos
alunos[4] = 'Vinicius';

console.log(alunos); */

/*
const alunos = ['1', '2', '3'];

console.log(alunos);
console.log(alunos.pop()); // Remove o último elemento
console.log(alunos); */

/*
const alunos = ['1', '2', '3'];

console.log(alunos);
console.log(alunos.shift()); // Remove o primeiro elemento
console.log(alunos); */

const notas = [];

notas.push(5);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++){
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);