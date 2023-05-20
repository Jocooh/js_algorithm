function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}
function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }
  //초기 길이 세팅
  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }
  //two-pointer, len부터 시작(3번째 추가 시작)
  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    //3개가 되면 비교 시작
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    //lt key의 값이 0이다? 그럼 key삭제
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));

//1.초기세팅으로 기준이 되는 문자열(t)을 해쉬로 넣는다.
//2.긴 문자열(s)에서 2개만 먼저 해쉬에 넣는다.
//3. lt,rt,를 가지고 투포인터로 하나씩 추가하고 삭제한다.(sH)
//4. 3번과정에서 기준이 되는 해쉬(tH)와 비교한다.
