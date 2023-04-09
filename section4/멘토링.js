function solution(test) {
  let answer = 0;
  let m = test.length; //arr의 수 (시험 횟수)
  let n = test[0].length; //학생 수
  for (let i = 1; i <= n; i++) {
    //1~4번까지의 학생의 경우의 수
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        //경우의 수로 만난 학생들의 등수 체크
        let pi = (pj = 0); //초기화
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++; // 한 시험횟수가 끝나고 카운팅 필요
      }
      if (cnt === m) answer++; //3번 다 카운팅이 됬다면 answer 올리기
    }
  }
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
//  i,j: 학생들이 만나는 경우의 수 ex) (1,2)(1,3)... 1번학생과 2번학생이 만나는 경우
// k: 시험의 횟수
// s: 등수

//pi와 pj는 각 학생들의 등수 표시(i=1,j=3)일때 (2,3) => 즉 1번학생은 2등 3번학생은 3등
