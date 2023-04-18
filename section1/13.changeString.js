function solution(s) {
  let result = "";
  for (let key of s) {
    if (key === key.toLowerCase()) {
      result += key.toUpperCase();
    } else {
      result += key.toLowerCase();
    }
  }
  return result;
}

console.log(solution("StuDY"));

// console.log("s" === "S"); //false
//기존의 문자와 변환 시 문자가 같으면 그 반대로 다시 빈 문자열에 넣어준다.+ else
//ex) s === s -> S
//ex) s !== S -> s
