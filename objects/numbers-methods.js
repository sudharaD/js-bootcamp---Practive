let num = 103.914

console.log(num.toFixed(2))

// Documentation - mdn numbers
// Documentation - mdn Math (for math object)

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let randomNumber = Math.random()
console.log(randomNumber)

let min = 10
let max = 20

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

console.log(randomNum)

// Challenge
// random nimber guess
// correct - true

let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
    console.log(randomNum)
    return guess === randomNum
}

console.log(makeGuess(1))
