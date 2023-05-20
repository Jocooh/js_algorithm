function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    //닫기 괄호가 나오면
    if (x === ')') {
      //열기 괄호가 나올떄까지 pop
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
}

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
