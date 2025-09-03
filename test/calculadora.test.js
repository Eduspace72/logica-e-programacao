const { somarDoisNumeros } = require('../src/calculadora');
const { expect } = require('chai');

describe('Testes da função de soma', function ( ) {
    it('A função deve ser capaz de somar dois nuúmeros positivos ', function () {
        // coleta o resultado da função 
        const resultadoDaSoma = somarDoisNumeros(5, 3);

        // compara o resultado com o valor que voçê espera
        expect(resultadoDaSoma).to.equal(8)
    });   
    
    it('A função deve ser capaz de somar um número posiivo e um negativo', function() {
        // coleta o resultado da função 
        const resultadoDaSoma = somarDoisNumeros(50, -15);

        // compararr o resultado com o valor que voçê espera
        expect(resultadoDaSoma).to.equal(35);
    });
});
