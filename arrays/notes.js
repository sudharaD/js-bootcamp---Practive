// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes)
// console.log(notes.length)
// console.log(notes[3])
// console.log(notes[notes.length-1])

// console.log('--------------------------------------')

// notes.push('My new note')
// console.log(notes)

// notes.pop()
// console.log(notes)

// const removedItem = notes.pop()
// console.log(removedItem)
// console.log(notes)

// notes.unshift('Unshift check note')
// console.log(notes)
// console.log(notes.shift())
// console.log(notes)

// notes.push('Note 3')
// console.log(notes)

// notes.splice(1, 1)
// console.log(notes)

// notes.push('Note 4')
// console.log(notes)
// notes.splice(1, 0, 'Check splice node')
// console.log(notes)

// notes.splice(1, 1, 'Note 2')
// console.log(notes)

// notes[2] = 'New note 3'
// console.log(notes)

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)
//     console.log('testing 123')
// })

// for (let count = 0; count <= 2; count++) {
//     console.log(count)
// }

// for (let count = 0; count < notes.length; count++) {
//     console.log(notes[count])
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

// const dataArray = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 8']

// console.log(dataArray.indexOf('Item 1'))
// console.log(dataArray.indexOf('Item 8'))
// console.log(dataArray.indexOf('Item 10'))

// const notes2 = ['Item 1', 'Item 2', 'Item 3']
// notes2.forEach(function (item, index){
//     console.log(`${index + 1}. ${item}`)
// }) 

// for (let count = 0; count <= 2; count++ ) {
//     console.log(count)
// }

// for (let count = 0; count < notes2.length; count++) {
//     console.log(notes2[count])
// }

const notesOfObjects = [{}, {
    title: 'Acedemic',
    body: 'ESD look'
}, {
    title: 'Tutorials',
    body: 'Js & React'
}, {
    title: 'Other',
    body: 'Valheim, Raamuwa'
}]

// console.log(notesOfObjects.indexOf('Item 2'))

// console.log(notesOfObjects)

// console.log(1 === 1)
// console.log({} === {})

// let someObject = {}
// let otherObject = someObject
// console.log(someObject === otherObject)

// const index = notesOfObjects.findIndex(function (note, index) {
//     console.log(note)
//     return note.body === 'Js & React'
// })
// console.log(index)

// const findNote = function(notes, noteTitle) {
//     const noteIndex = notes.findIndex(function(note, index) {
//         return note.title === noteTitle
//     })
//     return noteIndex
// } 

// const foundNoteIndex = findNote(notesOfObjects, 'other')

// if (foundNoteIndex >= 0) {
//     console.log(notesOfObjects[foundNoteIndex])
// } else {
//     console.log("Not found")
// }

const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
} 

const foundNote = findNote(notesOfObjects, 'other')
console.log(foundNote)


























