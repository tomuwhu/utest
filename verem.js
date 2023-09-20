class ML {
    push( k ) {
        this.begin = { key: k, next: this.begin }
    }
    pop() {
        if ( this.pv = this.begin) {
            this.begin = this.begin.next
            return this.pv.key
        }
    }
    forEach( f ) {
        let e = this.begin, i = 0
        while (e) f( e.key, i++, e ), e = e.next
    }
}
module.exports = ML