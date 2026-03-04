// changed this one to let because the variable gets reassigned which is not allowed using const
// if let is used you get TypeError: Assignment to constant variable
let fullName = "John Doe";
fullName = "Jane Doe";
console.log(fullName);

// changed to const because age is not modified.
// it doesnt really matter if you use a non constant in place of a constant other than you can accidently change it.
const age = 30;
if (age > 18) {
var adult = true;
console.log(adult);
}

// changed this one to let because the variable gets reassigned which is not allowed using const
// if let is used you get TypeError: Assignment to constant variable

let loopArray = [];
for (var i = 0; i < 5; i++) {
loopArray.push(i);
}
console.log(loopArray);

// changed this one to let because the variable gets reassigned which is not allowed using const
// if let is used you get TypeError: Assignment to constant variable

let MAXIMUM = 100;
MAXIMUM = 200;

// changed this one to let because the variable gets reassigned which is not allowed using const
// if let is used you get TypeError: Assignment to constant variable

let colors = ["Red", "Green", "Blue"];
colors = ["Yellow", "Pink", "Purple"];
console.log(colors);