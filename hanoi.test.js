const hanoi = require('./hanoi')

test('n = 1 test', () => {
    expect(hanoi(1, 1, 2)).toBe(" 1=>2 ")
    expect(hanoi(1, 1, 3)).toBe(" 1=>3 ")
    expect(hanoi(1, 2, 3)).toBe(" 2=>3 ")
    expect(hanoi(1, 3, 1)).toBe(" 3=>1 ")
})

test('n = 2 test', () => {
    expect(hanoi(2, 3, 1)).toBe(" 3=>2  3=>1  2=>1 ")
})

test('n = 3 test', () => {
    expect(hanoi(3, 1, 2)).toBe(" 1=>2  1=>3  2=>3  1=>2  3=>1  3=>2  1=>2 ")
})