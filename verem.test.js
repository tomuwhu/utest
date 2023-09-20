const ML = require('./verem')
const ml = new ML()
test('push & pop test', () => {
    ml.push(1)
    ml.push(2)
    ml.push(7)
    expect(ml.pop() + ml.pop()).toBe(9)
    ml.pop()
})
test('forEach test', () => {
    ml.push(1)
    ml.push(2)
    ml.push(7)
    let a = 0
    ml.forEach(v => a += v)
    expect(a).toBe(10);
})