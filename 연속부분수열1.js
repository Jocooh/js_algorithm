function solution(n, m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      //누적 값이 m값보다 커지면 lt를 증가시키면서 값을 빼본다.
      sum -= arr[lt++];
      if (sum === m) answer++;
      // console.log(lt, rt);
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(8, 6, a));
