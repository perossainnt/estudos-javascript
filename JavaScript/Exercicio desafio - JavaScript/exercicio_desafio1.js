// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const {gets, print} = require('./funcoes-auxiliares1')

const notaAluno = gets();

    if (notaAluno < 5){
        print('Reprovado');
    } else if (notaAluno >= 5 && notaAluno < 7) {
        print('Recuperação')
    } else {
        print('Aprovado')
    }