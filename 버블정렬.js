function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
//버블정렬은 반복문이 한번씩 돌때마다 가장 큰 수가 정해짐
//그래서 끝까지 반복문이 돌 필요없이 arr.length-i-1이 필요.
