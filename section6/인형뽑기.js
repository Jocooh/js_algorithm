function solution(board, moves) {
  //필요한 변수 선언
  let answer = 0;
  let stack = []; //바구니
  //for문
  moves.forEach((pos) => {
    for (let i = 0; i < board.length; i++) {
      //크레인이 찝을 변수
      if (board[i][pos - 1] !== 0) {
        //0이 아닐때
        let tmp = board[i][pos - 1]; //기존의 값을 tmp에 할당
        board[i][pos - 1] = 0; //기존의 값은 0
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));

//1. 뽑는 순서 forEach
//2. for문으로 board의 위치를 잡는다.
//3. 0이 아니라면 stack과 비교
//4. 0이라면 break(필수)
