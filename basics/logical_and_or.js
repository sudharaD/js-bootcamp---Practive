let temp = 30;

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside');
} else if (temp >= 120 || temp <= 0) {
    console.log('Do not go outside');
} else {
    console.log('Do what you want');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = true;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only vegan foods');
} else if (isGuestTwoVegan && isGuestOneVegan) {
    console.log('Meat')
} else {
    console.log("Vegan and meat")
}