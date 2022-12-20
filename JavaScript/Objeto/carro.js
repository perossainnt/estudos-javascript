class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distancia, precoCombustivel){
        return distancia * precoCombustivel * this.gastoMedioPorKm; 
    }
}

const sandero = new Carro('Renault', 'Branco', (1 / 12));
//sandero.calcularGastoDePercurso(70, 5);
console.log(sandero.calcularGastoDePercurso(70, 5));