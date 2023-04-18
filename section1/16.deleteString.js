function solution(s) {
  let answer = "";
  //   console.log(s.indexOf("k"));
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
console.log(solution("ksekkset"));
//.indexOf()는 특정 문자열이 처음으로 나타나는 위치를 반환하는 메서드
