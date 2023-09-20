const hanoi = require('./hanoi')

test('Hanoi n = 1 teszt', () => {
    expect(hanoi(1, 1, 2)).toBe(" 1=>2 ")
    expect(hanoi(1, 1, 3)).toBe(" 1=>3 ")
    expect(hanoi(1, 2, 3)).toBe(" 2=>3 ")
    expect(hanoi(1, 3, 1)).toBe(" 3=>1 ")
})

test('Hanoi n = 2 teszt', () => {
    expect(hanoi(2, 3, 1)).toBe(" 3=>2  3=>1  2=>1 ")
})

test('Hanoi n = 3 teszt', () => {
    expect(hanoi(3, 1, 2)).toBe(" 1=>2  1=>3  2=>3  1=>2  3=>1  3=>2  1=>2 ")
})
Array(10).fill(0).map((_, i) => i + 4).forEach(n => {
    test(`Hanoi n = ${n} teszt`, () => {
        const h = hanoi(n, 1, 2)
        expect(h.length).toBe(6 * (2 ** n - 1))
    })
})
