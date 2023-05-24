function solution(n) {
  let answer = '';
  function DFS(n) {
    //언제 재귀가 멈출지
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2)); //11->5->2->1->0
      answer += n % 2;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
