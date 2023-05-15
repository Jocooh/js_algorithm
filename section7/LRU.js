// function solution(size, arr) {
//   let answer = Array.from({ length: size }, () => 0); //메모리 크기 만큼 0으로 채워넣기
//   arr.forEach((item) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (item === answer[i]) pos = i; //메모리에 기존의 값이 있는지 확인 있다면 pos에 해당 값 index넣기

//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answer[i] = answer[i - 1]; //한칸씩 뒤로 땡겨주기 (미스)
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         //Pos값(일치하는 값)부터 1번째까지 for문 반복으로 값을 뒤로 미뤄주고
//         answer[i] = answer[i - 1];
//       }
//     }
//     answer[0] = item; //첫번째자리에 기존 또는 새로운값 넣어주기
//   });
//   return answer;
// }

// let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));

//----------------------⬇️내장함수로 리팩토링 해보기-------------------------------------------------------

function solution(size, arr) {
  let answer = [];
  arr.forEach((item) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (item === answer[i]) pos = i; //메모리에 기존의 값이 있는지 확인 있다면 pos에 해당 값 index넣기
    if (pos === -1) {
      answer.unshift(item); //맨앞에 넣기
      if (answer.length > size) answer.pop(); // 기존의 사이즈 유지하기
    } else {
      //히트일경우
      answer.splice(pos, 1); //Pos index값을 자른다.
      answer.unshift(item); //맨앞에 넣어준다.
    }
  });
  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
