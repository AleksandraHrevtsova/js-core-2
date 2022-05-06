// switch (condition) {
//   case '':
//     statement;
//     break;
//   case '':
//     statement;
//     break;
//   case '':
//     statement;
//     break;
//   default:
//     statement;
// }
let day = 'tuesday';
// day = prompt('DAY');
switch (day) {
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thusday':
  case 'friday':
    console.log(`It's work day`);
    break;
  case 'saturday':
  case 'sunday':
    console.log(`It's Holiday`);
    break;
  default:
    console.log('ERROR');
}
