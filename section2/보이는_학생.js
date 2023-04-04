function solution(arr) {
  let answer = 0;
  let standard = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    if (x > standard) {
      answer++;
      standard = x;
    }
  }
  return answer;
}
let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
