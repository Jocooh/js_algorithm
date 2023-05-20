function solution(s) {
  return converter(s, 0, 0);
}

function converter(s, repeatCnt, deletedZero) {
  const onlyOne = s.split('').filter((c) => {
    if (c == 1) return c;
  });
  // console.log('onlyOne', onlyOne);
  const converted = onlyOne.length.toString(2); //이진수로 변환
  // console.log('converted', converted);
  deletedZero += s.length - onlyOne.length; //제거한 0의 갯수
  repeatCnt++; //횟수

  if (converted == 1) return [repeatCnt, deletedZero];
  else return converter(converted, repeatCnt, deletedZero); //이진수로 변환한 값을 다시 리턴
}

console.log(solution('110010101001'));
