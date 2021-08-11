let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook)
console.log(myBook.author)
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

// Challenge
// name, age, location

// andrew is 27 and lives in Philadelphia
// Increase age by one and print again

let personInfo = {
    name: 'Anderw',
    age: 27,
    location: 'Philadelphia'
}

console.log(`${personInfo.name} is ${personInfo.age} and lives in ${personInfo.location}`)

personInfo.name = 'Jen'
personInfo.age--
personInfo.location = 'Philadelphia'

console.log(`${personInfo.name} is ${personInfo.age} and lives in ${personInfo.location}`)
