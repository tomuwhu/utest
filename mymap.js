class myMap extends Map {
    set(p, r) {
        if (this.has(p)) {
            var l = super.get(p)
            if (typeof l == 'number' && typeof r == 'number')
                super.set(p, r * l)
            else if(typeof l == 'string' && typeof r == 'string')
                super.set(p, l + r)
            else
                super.set(p, r)
        } else super.set(p, r)
    }
}
module.exports = myMap