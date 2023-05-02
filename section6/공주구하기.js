function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1); //1~8번까지 배열 만들어주기
  // console.log(queue);
  while (queue.length > 0) {
    for (let i = 1; i < k; i++) queue.push(queue.shift()); //2번째까지는 다시 배열에 넣어주기
    queue.shift();
    if (queue.length === 1) {
      answer = queue.shift();
    }
  }
  return answer;
}

console.log(solution(8, 3));
