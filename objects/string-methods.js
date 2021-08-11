let name = '  Andrew Mead'

// Length Property (property)
console.log(name.length)

// Convert to upper case (method)
console.log(name.toUpperCase()) // Not going to change the variable. Give a new string to store

//Convert to Lower Case
console.log(name.toLowerCase())

// mdn string --> Search in google for allmethods

// Includes method
let password = '123pasword124'
console.log(password.includes('password'))

// Trim method - A new string representing the str stripped of whitespace from both ends.
console.log(name.trim())

//Challenge
// create function - isValidPassword
// length is more than 8, doesn't contain word 'password'

let isValidPassword = function(password) {
    let trimmedPassword = password.trim()
    if(trimmedPassword.length < 8 || password.includes('password')) { 
        return false
    }
    return true
}

console.log(isValidPassword('kas'))
console.log(isValidPassword('fsfsfsf31313@!#'))
console.log(isValidPassword('kahfka9274passwordcsdkfn'))

