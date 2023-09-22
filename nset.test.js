const myMap = require('./mymap')
test('average test', () => {
    s = new myMap()
    s.set(2, 4)
    s.set(3, 7)
    s.set(2, 6)
    expect(s.get(2)).toBe(5)
})