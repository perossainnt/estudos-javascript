class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    valorImc(){
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc(){
        const imc = this.valorImc();
        if(imc < 18.5){
            return 'Abaixo do peso';
        } else if(imc >= 18.5 && imc< 25){
            return 'Peso normal';
        } else if(imc >= 25 && imc < 30){
            return 'Acima do peso';
        } else if(imc >= 30 && imc < 40){
            return 'Obeso';
        } else {
            return 'Obesidade Grave'
        }
    }
}

const pedro = new Pessoa('Pedro', 80, 1.75);

console.log(`Meu nome é ${pedro.nome}. Eu peso ${pedro.peso}, minha altura é ${pedro.altura}. E o meu IMC é: ${pedro.valorImc().toFixed(0)} ou seja, eu estou ${pedro.classificarImc()}`);