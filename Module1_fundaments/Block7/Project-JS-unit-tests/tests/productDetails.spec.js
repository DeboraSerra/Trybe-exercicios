const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function');
    expect(productDetails('Alcool', 'Máscara').length).toBeTruthy();
    expect(productDetails('Alcool', 'Máscara').length).toBe(2);
    expect(typeof productDetails('Alcool', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool', 'Máscara')[1]).toBe('object');
    expect(productDetails('Alcool', 'Máscara')[0] !== productDetails('Alcool', 'Máscara')[1]).toBe(true);
    expect(productDetails('Alcool', 'Máscara')[0].details.productId).toContain('Alcool123');
    expect(productDetails('Alcool', 'Máscara')[1].details.productId).toContain('Máscara123')
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    // Teste se o retorno da função é um array.
    // Teste se o array retornado pela função contém dois itens dentro.
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    // Teste se os dois productIds terminam com 123.
  });
});
