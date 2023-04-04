function solution(arr) {
  let answer = [];
  let sortArr = [...arr].sort((a, b) => b - a);
  console.log(sortArr); //[100,92,89,87,76]

  for (let i = 0; i < sortArr.length; i++) {
    answer.push(sortArr.indexOf(arr[i]) + 1); //arr[i]값을 sortArr의 indexOf로 확인
  }
  return answer;
}
let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

//--------------------------------------------------------다른방법
// function solution(arr) {
//   let n = arr.length;
//   let answer = Array.from({ length: n }, () => 1);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (arr[j] > arr[i]) answer[i]++;
//     }
//   }
//   return answer;
// }

// let arr = [87, 89, 100, 100, 76];
// console.log(solution(arr));
