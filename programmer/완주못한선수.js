function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return 'nothing';
}
let participants = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
let completion = ['josipa', 'filipa', 'marina', 'nikola'];
console.log(solution(participants, completion));
