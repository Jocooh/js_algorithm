function solution(s) {
  let answer = 0;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let lt = stack.pop();
      let rt = stack.pop();
      if (x === '+') stack.push(rt + lt);
      else if (x === '-') stack.push(rt - lt);
      else if (x === '*') stack.push(rt * lt);
      else if (x === '/') stack.push(rt / lt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
