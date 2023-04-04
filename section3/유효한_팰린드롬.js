function solution(s) {
  UPPER = s.toUpperCase().replace(/[^A-Z]/g, '');
  if (UPPER.split('').reverse().join('') !== UPPER) return 'NO';
  else {
    return 'YES';
  }
}

let str = 'found7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
//1.문자열뺴고 다 공백으로 바꿔준다.(정규식 사용)
//2.reverse메소드 사용을 위해 split으로 배열을 만들어 준다.
