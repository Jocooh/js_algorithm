// function solution(s, t) {
//   let answer = 0;
//   for (let x of s) {
//     if (x === t) {
//       answer += 1;
//     }
//   }
//   return answer;
// }

// let str = "COMPUTERPROGRAMMING";
// console.log(solution(str, "G"));

function solution(s, t) {
  let answer = s.split(t).length; //[ 'COMPUTE', 'P', 'OG', 'AMMING' ] =>4
  return answer - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));
