function solution(s) {
  let answer = 0;
  let stack = [];
  //숫자만 먼저 stack에 넣기
  for (let x of s) {
    if (!isNaN(x)) {
      stack.push(Number(x));
    }
    //연산자를 만나면 lt,rt 지정
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
