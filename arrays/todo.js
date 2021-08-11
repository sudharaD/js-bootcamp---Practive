// Challenge
// Create an array with five todos
// You have x todos
// Print the first and second to last items --> Todo: walk the dog

const todoList = [
    'js 1 hour',
    'React 1 hour',
    'css/html 30 minutes',
    'Mobile lectures 5,6,7',
    'Assignments'
]

console.log(`You have ${todoList.length} todos`)
console.log(`--> Todo: ${todoList[0]}`)
console.log(`--> Todo: ${todoList[todoList.length - 2]}`)

console.log('--------------------------------------')

// Challenge
// Delete the 3rd item
// Add a new item onto the end of the list
// Remove the first item from the list

console.log(todoList)
todoList.splice(2, 1)
console.log(todoList)
todoList.push('New - Logo design')
console.log(todoList)
todoList.shift()
console.log(todoList)

todoList[4] = 'test'
console.log(todoList)

// Challenge
// Create array
// Print - 
// 1. item 1
// 2. item 2

const arrayTwo = ['item 1', 'item 2', 'item 3']

arrayTwo.forEach(function (iyem, intex) {
    console.log(`${intex + 1}. ${iyem}`)
})

// challenge
// 1. item 1
// ......

for (let count = 0; count < todoList.length; count++) {
    console.log(`${count + 1}. ${todoList[count]}`)
}

// Documentation - mdn for


