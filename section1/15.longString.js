function solution(s) {
  let answer = s.length;
  if (answer % 2 === 1) {
    let result = parseInt(answer / 2);
    return s[result];
  } else {
    let result = answer / 2;
    let picked = s.slice(result - 1, result + 1);
    return picked;
  }
}
console.log(solution("fjaekfhe"));
