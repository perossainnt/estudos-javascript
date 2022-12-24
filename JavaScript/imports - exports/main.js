
const {gets, print} = require('./funcoes-auxiliares')

const notaAluno = gets();

    if (notaAluno < 5){
        print('Reprovado');
    } else if (notaAluno >= 5 && notaAluno < 7) {
        print('Recuperação')
    } else {
        print('Aprovado')
    }