const calculator_function = require('../calculator_function.js');

test('the sum of 1 and 5 is 6', () => {
    const actual = calculator_function.tambah(1, 5);
    const expected = 6;
    expect(actual).toBe(expected);
});

test('the sum of 12 and "23" is 35', () => {
    expect(calculator_function.tambah(12, "23")).toBe(35);
});

test('the sum of 4 and "title" is false', () => {
    expect(calculator_function.tambah(4, "title")).toBe(false);
});

test('the sum decimal with integer 3.14 + 3 is 6.14', () => {
    expect(calculator_function.tambah(3.14, 3)).toBe(6.14);
});

test('the substract 6 and 3 is 3', () => {
    expect(calculator_function.kurang(6, 3)).toBe(3);
});

test('the division of 8 and 2 is 4', () => {
    expect(calculator_function.bagi(8, 2)).toBe(4);
});

test('the multiplication of 8 and 2 is 16', () => {
    expect(calculator_function.kali(8, 2)).toBe(16);
});