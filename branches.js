// if (condition) {
//   statement;
// }
// else if(condition){
//     statement
// }
// else {
//     statement
// }
let condition; // GLOBAL
// console.log('GLOBAL condition', condition);
if (condition) {
  //   console.log('BLOCK condition', condition);
  let result = true;
  //   console.log(result);
} else {
  //   console.log('BLOCK condition', condition);
  let result = false;
  //   console.log(result);
}

let num = 13;
// if (num % 2 === 0) {
//   num = num + 1;
// } else {
//   num;
// }
// console.log('num:', num);

// TERNARY OPERATOR
// condition ? "то что true" : "то что false"
num = num % 2 === 0 ? (num = num + 1) : num;
console.log('num:', num);
// console.log(result);

// // BRANCH with &&
// let value = prompt('Enter your age');
// console.log('value:', value);
// if (value < 18 && value >= 14) {
//   console.log(`You are so yung`);
// } else if (value >= 18 && value <= 65) {
//   console.log('Age is doog!');
// } else if (value > 65) {
//   console.log(`redirect to another page`);
// } else {
//   console.log('ERROR');
// }

// // BRANCH with ||
// let day = 'sunday';

// if (
//   day === 'monday' ||
//   day === 'tuesday' ||
//   day === 'wednesday' ||
//   day === 'thusday' ||
//   day === 'friday'
// ) {
//   console.log(`It's work day`);
// } else if (day === 'saturday' || day === 'sunday') {
//   console.log(`It's Holiday`);
// } else {
//   console.log('Error');
// }
