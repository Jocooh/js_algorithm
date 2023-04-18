function solution(str) {
  let answer = ""; //빈 스트링
  for (let x of str) {
    //x=B,A,N,A,N,A
    if (x === "A") {
      answer += "#"; //만약에 A와 같다면 #을 answer에 넣을 것이고 아니면 그냥 x그대로 넣겠다.
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));
