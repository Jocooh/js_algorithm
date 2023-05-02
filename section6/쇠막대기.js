function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]);
    else {
      stack.pop(); //레이저의 괄호시작 또는 쇠막대기의 시작을 없애줄 필요
      if (s[i - 1] === '(') answer += stack.length;
      else {
        answer += 1; //막대기의 끝일때
      }
    }
  }
  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
