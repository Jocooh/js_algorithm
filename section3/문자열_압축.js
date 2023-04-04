function solution(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' '; //뒤에있는 값과 비교해야하므로 빈 문자값을 넣어준다.
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt); //문자열로 해주기
      cnt = 1;
    }
  }
  return answer;
}

let str = 'KKHSSSSSSSE';
console.log(solution(str));
