function dfs(graph, v, visited) {
  // 현재 노드를 방문 처리
  console.log('start:', 'graph-', graph, 'v-', v, 'visited-', visited);
  visited[v] = true;
  console.log('visited:', visited);
  console.log('V:', v);

  // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
  for (let node of graph[v]) {
    console.log('node:', node);
    if (!visited[node]) {
      console.log('visited[node]', visited[node]);
      dfs(graph, node, visited);
    }
  }
}

const graph = [[1, 2, 3], [0, 6], [0], [0, 4, 5], [3], [3], [1]];
const visited = Array(6).fill(false); //[ false, false, false, false, false, false ]

dfs(graph, 0, visited);
// 0 1 6 2 3 4 5
