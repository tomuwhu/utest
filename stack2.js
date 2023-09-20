class Stack {
    constructor() {
        this.container = [], this.size = 0
    }
    push(x) {
        if (Array.isArray(x)) {
            x.forEach(element => {
                this.container.push(element), 
                this.size++
            })
        } else {
            this.container.push(x), this.size++
        } //O(1)
    }
    pop() { // O( 1 )
        if (this.size) {
            this.size--
            return this.container.pop() // O( 1 )
        } else return null
    }
    check() {
        return this.container[0] // O( 1 )
    }
    toArray() { // O( n * get() )
            let rv = []
            while (this.size) 
                rv.push(this.pop())
            return rv
    }
    [Symbol.iterator]() { // O( n * get() )
        return {
            next: () => {
                if (this.size > 0) {
                    return {
                        value: this.get(),
                        done: false
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }
}
module.exports = Stack
