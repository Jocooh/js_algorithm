function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER; //가장 큰 수를 구해야하므로 작은 수를 기준잡기
  let n = arr.length;
  let sum1 = (sum2 = 0); //sum1 = 행의 값 , sum2 = 열의 값
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0; //for문이 돌때마다 값을 초기화 해줘야한다.
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; //i가 고정
      sum2 += arr[j][i]; //j가 고정
    } //여기까지가 행과 열 (총 10개)의 값이 나온다.
    answer = Math.max(answer, sum1, sum2); // 이 세 가지 중에서 가장 큰 값이 들어간다. => 즉 데이터 10개에서 큰 수 5개가 나온다.(for문)
  }
  sum1 = sum2 = 0; //초기화
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i]; //대각선
    sum2 += arr[i][n - i - 1]; //대각선 끝부터
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
