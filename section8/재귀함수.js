// function solution(n) {
//   function DFS(L) {
//     if (L === 0) return;
//     else {
//       console.log(L);
//       DFS(L - 1);
//     }
//   }
//   DFS(n);
// }

// solution(3); //3,2,1
//1,2,3으로 호출하려면 5번줄과 6번줄을 바꾸어준다.
function solution(n) {
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }

  DFS(n);
}

solution(3); //1,2,3
