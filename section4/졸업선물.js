function solution(m, product) {
  let answer = 0;
  let n = product.length; //5
  product.sort((a, b) => a[0] + a[1] - b[0] + b[1]);
  for (let i = 0; i < n; i++) {
    let seed = m - (product[i][0] / 2 + product[i][1]); //할인쿠폰을 하나의 경우마다 다 써보자.
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > seed) break; //헛돌지 않도록 하기 위해서
      if (j !== i && product[j][0] + product[j][1] <= seed) {
        //남아있는 돈 보다 가격이 아직 적다면
        seed -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt); //할인쿠폰을 학생 하나 당 썼을때 나올 수 있는 최대 학생 수 = cnt, 즉 answer 에는 상황에 따라 가장 많은 학생수가 나온다.
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
