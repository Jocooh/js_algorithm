function solution(s) {
  let answer = 'YES';
  let stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) {
        return 'NO';
      }
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO'; //열기가 남아있다면
  return answer;
}

let a = '(()(()))(()'; //11211222112
console.log(solution(a));
