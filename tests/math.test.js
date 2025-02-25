const math = require('../math');

test('Soma de 2 + 3 = 5', () => {
    expect(math.add(2, 3)).toBe(5)
})

test('Soma de 2 - 3 = 5', () => {
    expect(math.subtract(2, 3)).toBe(-1)
})

test('Divisão de 6 / 3 = 2', () => {
    expect(math.divide(6, 3)).toBe(2)
})

test('Multiplicação de 4 * 5 = 20', () => {
    expect(math.multiply(4, 5)).toBe(20)
})