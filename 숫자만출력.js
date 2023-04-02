function solution(str) {
  let answer = '';
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str = 'g0en2T0s8eSoft';
console.log(solution(str));

//1.숫자인것만 answer에 넣기 isNaN
//2.answer을 숫자로 바꾸기  parseInt
