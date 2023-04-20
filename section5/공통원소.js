function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}
let a = [1, 3, 9, 5, 2]; //1,2,3,5,9
let b = [3, 2, 5, 7, 8]; //2,3,5,7,8
console.log(solution(a, b));

//다른풀이
// function solution(arr1, arr2) {
//   let answer = [];
//   let sortarr1 = arr1.sort((a, b) => a - b);
//   let sortarr2 = arr2.sort((a, b) => a - b);

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1.length; j++) {
//       if (sortarr1[i] === sortarr2[j]) {
//         answer.push(sortarr1[i]);
//       }
//     }
//   }
//   return answer;
// }
