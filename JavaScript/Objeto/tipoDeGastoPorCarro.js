const precoGasolina = 4.93;
const precoEtanol = 3.40;
const combustivelEtanol = "Etanol";
const combustivelGasolina = "Gasolina";
const gastoMedioPorCarro = 12;
const distanciaPorKm = 100;
const mediaDistanciaGasto = distanciaPorKm / gastoMedioPorCarro;
const valorMediaGasolina = mediaDistanciaGasto * precoGasolina;
const valorMediaEtanol = mediaDistanciaGasto * precoEtanol;

class Carro {
    marca;
    modelo;
    ano;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
};

const propriedadesFord = new Carro('Ford', 'Ranger', 2020);
const propriedadesFiat = new Carro('Fiat', 'Uno', 2019);
const propriedadesChevrolet = new Carro('Chevrolet', 'Onix', 2021);

class TipoCombustivel {
    _etanol = 3.40;
    _gasolina = 4.93;

    constructor(etanol, gasolina) {
        this._etanol = etanol;
        this._gasolina = gasolina;
    }

    combustivel(tipo) {
        if (this._etanol > this._gasolina) {
            console.log(`O seu tipo de combustível é ${this._etanol} e gasta ${valorMediaEtanol.toFixed(2)} a cada 100km `)
            return
        } else {
            console.log(`O seu tipo de combustível é ${this._gasolina} e gasta ${valorMediaGasolina.toFixed(2)}`);
        }
    };
};

const tipoCombustivelCarro = new TipoCombustivel('Etanol', 'Gasolina');

console.log(tipoCombustivelCarro.combustivel());