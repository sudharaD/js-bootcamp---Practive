let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard zinn',
    pageCount: 723
}

let getSummary = function (book) {
    
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`

    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(otherBookSummary.pageCountSummary);

// Challenge
//create function, take in fahrenheit, return object

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32) * 5 / 9,
        kelvin: (fahrenheit - 32) * 5 / 9 + 273
    }
}

let convertedValues = convertFahrenheit(86);
console.log(convertedValues.celcius)
console.log(convertedValues.kelvin)

console.log(convertFahrenheit(86))
