const St = require('./stack2')
st = new St()
test('push & pop test', () => {
    st.push(1)
    st.push(7)
    st.push(3)
    st.pop()
    expect(st.pop()).toBe(7)
    st.pop()
})
test('forEach', () => {
    st.push(1)
    st.push(7)
    st.push(3)
    let a = 0
    st.toArray().forEach(v => a += v)
    expect(a).toBe(11);
})