// function solution(s) {
//   s = s.toUpperCase();
//   len = s.length;
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//    if (s[i] != s[len - i - 1]) {
//       return 'NO';
//     }
//   }
//   return 'YES';
// }
function solution(s) {
  s = s.toUpperCase();
  len = s.length;
  if (s.split('').reverse().join('') !== s) {
    return 'NO';
  }
  return 'YES';
}

let str = 'gooG';
console.log(solution(str));
