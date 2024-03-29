function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  //for문 뒤집어서 시작
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0; //기존에 벌써 0이 들어가 있으므로 두 번 할 필요없다.
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

let str = 'teachermode';
console.log(solution(str, 'e'));

// function solution(s, t) {
//   let answer = [];
//   let cnt = 0;
//   //왼->오 방향
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== t) {
//       cnt++;
//       answer.push(cnt);
//     } else {
//       cnt = 0;
//       answer.push(cnt);
//     }
//   }
//   cnt = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] !== t) {
//       cnt++;
//       answer[i] = Math.min(cnt, answer[i]);
//     } else {
//       cnt = 0;
//     }
//   }
//   return answer;
//   }

//   let str = 'teachermode';
//   console.log(solution(str, 'e'));
