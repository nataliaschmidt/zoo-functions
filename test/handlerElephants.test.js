const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se a função existe', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica se a função retorna undefined caso não receba parâmetros.', () => {
    expect(handlerElephants()).toBeUndefined();
  });
  it('Verifica se a função retorna uma frase caso o parâmetro seja diferente de string', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('verifica se o retorno está correto para cada parâmetro passado', () => {
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
    expect(handlerElephants('averageAge')).toBe(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBe(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Testa a linha 18 da função computeData, em caso de nulo', () => {
    expect(handlerElephants('null')).toBe(null);
  });
});
