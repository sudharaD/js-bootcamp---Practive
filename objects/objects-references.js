let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addIncome = function(account, income) {
    account.income = account.income + income
}

let addExpenses = function(account, amount) {
    account.expenses = account.expenses + amount
} 

let getAccountSummary = function(account) {
    let savings = account.income - account.expenses
    return `Account for ${account.name} has $${savings}. $${account.income} in income. $${account.expenses} in expenses`
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

addIncome(myAccount, 100000)
addExpenses(myAccount, 10000)
addExpenses(myAccount, 15000)

let summary = getAccountSummary(myAccount)
console.log(summary)

resetAccount(myAccount)

summary = getAccountSummary(myAccount)
console.log(summary)

