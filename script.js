let str = 'salom bolajonlar nega uy ishi qmadila salom nima qvossila'
let box = ''

let arr = str.split('')

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 's') {
        box += arr[i]
        str = box.split('')
        string = str.join('-')
    }
}
console.log(string);