function solution(v) {
  let answer;
  function DFS(v) {
    if (v > 7) return;
    //lt,rt,로 가야한다.
    else {
      console.log(v); //전위순회
      DFS(v * 2); //lt
      // console.log(v); //중위순회
      DFS(v * 2 + 1); //rt
      // console.log(v); //후위순회
    }
  }
  DFS(v);
}

console.log(solution(1));
