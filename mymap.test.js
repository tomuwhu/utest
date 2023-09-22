const myMap = require('./mymap')
test('number_prod test', () => {
    s = new myMap()
    s.set(2, 4)
    s.set(3, 7)
    s.set(2, 6)
    s.set(2, 2)
    expect(s.get(2)).toBe(48)
})
test('string test', () => {
    s = new myMap()
    s.set(2, "a")
    s.set(3, "b")
    s.set(2, "c")
    expect(s.get(2)).toBe("ac")
})