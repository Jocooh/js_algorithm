function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    //s배열안에 index를 알기 위해서 사용함 : s.indexOf
    if (i === s.indexOf(s[i])) {
      answer.push(s[i]);
    }
  }
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
