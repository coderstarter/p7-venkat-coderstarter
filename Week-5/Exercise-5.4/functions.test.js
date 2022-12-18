const functions = require('./functions');


test('Add 2 + 2 equals to = 4 ', () => {
    expect(functions.add(2, 4)).toBe(6);
});


test('Add 4 - 4 equals to = 0 ', () => {
    expect(functions.subtract(4, 4)).toBe(0);
});

test('Add 20 * 20 equals to = 400 ', () => {
    expect(functions.multiply(20, 20)).toBe(400);
});

test('Add 100/10  equals to = 10', () => {
    expect(functions.divide(100, 10)).toBe(10);
});
