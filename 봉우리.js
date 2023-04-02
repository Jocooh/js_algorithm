function solution(arr) {
  let answer = 0;
  let n = arr.length;
  //dx , dy는 좌우상하index
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k]; //행 좌표
        let ny = j + dy[k]; //열 좌표
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          //여기까지의 조건 : 0일때 -1로 index가 되면 안되므로
          arr[nx][ny] >= arr[i][j] //arr[i][j] : 봉우리 센터값, arr[nx][ny]:센터 주위 값  => 즉슨 봉우리가 아니라면~
        ) {
          flag = 0;
          break; //굳이 상하좌우 중 하나가 먼저 발견되면 나머지꺼는 안봐도되므로 break
        }
      }
      if (flag) answer++; //answer: 봉우리 갯수
    }
  }
  return answer;
}
let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];
console.log(solution(arr));
