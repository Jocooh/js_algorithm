function solution(arr) {
  let num = 0;
  let standard = Number.MIN_SAFE_INTEGER;
  for (let x in arr) {
    if (arr[x] > standard) {
      standard = arr[x];
      num++;
    }
  }
  return num;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
