// Arg - total score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

let gradeCalc = function (totalScore, totalPossibleScore) {

    let grade
    let precentage = (totalScore / totalPossibleScore) * 100

    if (precentage >= 90) {
        grade = 'A'
    } else if (precentage >= 80) {
        grade = 'B'
    } else if (precentage >= 70) {
        grade = 'C' 
    } else if (precentage >= 60) {
        grade = 'D'
    } else {
        grade = 'F'
    }

    return `You got a ${grade} (${precentage}%)!`
}

let result = gradeCalc(100, 100)

console.log(result)

