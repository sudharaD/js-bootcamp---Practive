//Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let results = add(10 , 1, 5)

console.log(results)

// Defaults arguments
let getScoreText = function (name = 'player', score = 0) {
    //return 'Name: ' + name + ', Score: ' + score
    return `Name: ${name}, Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)

console.log(scoreText)

// Challenge Area
let tipCal = function (total, tipPrecentage = 0.2) {

    let precentage = tipPrecentage * 100
    let tip = total * tipPrecentage
 
   // return 'Total: ' + total + ', Tip: ' + total * tipPrecentage

   return `A ${precentage}% tip on $${total} would be $${tip}`
}

let bill = tipCal(100, .1)
console.log(bill)

let name = 'Vikram'
let age = 11

console.log(`Hey, my name is ${name}, and i am ${age} years old`)

