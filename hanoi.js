const hanoi = (n, a, b) => n == 1
        ?   ` ${a}=>${b} `
        :   hanoi(n - 1, a, 6 - a - b) +
            ` ${a}=>${b} ` +
            hanoi(n - 1, 6 - a - b, b)
module.exports = hanoi